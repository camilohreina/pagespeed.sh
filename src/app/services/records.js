import { API_URL, API_KEY } from "./../config";
import {
  convertToCamelCase,
  formatTimeSeconds,
  getClassByRange,
} from "../utils/helperFunctions";
async function genericRequestCruxApi(requestBody) {
  console.log(API_URL);
  const endpoint = `${API_URL}records:queryRecord?key=${API_KEY}`;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      formFactor: ["PHONE", "DESKTOP"],
      body: JSON.stringify(requestBody),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function getRecordsByWebSite({ website }) {
  try {
    console.log(website);
    const data = await genericRequestCruxApi({
      origin: website,
    });
    const { metrics } = data.record;
    let metricsRecord = [];
    for (let metric in metrics) {
      const time = metrics[metric].percentiles.p75;

      metricsRecord.push({
        key: metric,
        title: convertToCamelCase(metric),
        time: {
          format: formatTimeSeconds(time),
          className: getClassByRange(
            time,
            metrics[metric].histogram.map((item) => item.end || item.start)
          ),
        },
        histogram: metrics[metric].histogram,
        range: metrics[metric].histogram.map((item) => item.density * 100),
        p75: time,
      });
    }

    return metricsRecord;
  } catch (error) {
    return { error: "Not found metrics" };
  }
}
