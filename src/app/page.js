import { API_URL, API_KEY } from "./config";
import { MainChart } from "./components/MainChart";

import data from "./data/data.json";

async function genericRequestCruxApi(requestBody) {
  const endpoint = `${API_URL}records:queryRecord?key=${API_KEY}`;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(requestBody),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

async function getRecordsByWebSite({ website }) {
  try {
    const data = await genericRequestCruxApi({
      origin: website,
    });
    return data;
  } catch (error) {
    return error;
  }
}

export default async function Home() {
  console.log(data.largest_contentful_paint.histogram);

  // const data  = await getRecordsByWebSite({website: 'https://google.com'})
  // console.log(data.record.metrics.largest_contentful_paint)

  return (
    <main className="flex  flex-col items-center justify-between p-24">
      <MainChart />
    </main>
  );
}
