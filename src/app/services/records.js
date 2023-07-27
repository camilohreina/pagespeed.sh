import { API_URL, API_KEY } from "./../config";
import { convertToCamelCase } from "../utils/stringFormat";
async function genericRequestCruxApi(requestBody) {
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
    const data = await genericRequestCruxApi({
      origin: website,
    });
    const { metrics } = data.record;
    let metricsRecord = [];
    for (let metric in metrics) {
      metricsRecord.push({
        key: metric,
        title: convertToCamelCase(metric),
        histogram: metrics[metric].histogram,
        range: metrics[metric].histogram.map((item) => item.density * 100),
        p75: metrics[metric].percentiles.p75,
      });
    }

    return metricsRecord;
  } catch (error) {
    return error;
  }
}
