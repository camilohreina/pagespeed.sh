import { MainChart } from "./components/MainChart";
import { getRecordsByWebSite } from "./services/records";
import { BarChart } from "./components/BarChart";
export default async function Home() {
  const data = await getRecordsByWebSite({ website: "https://google.com" });
  console.log(data);
  return (
    <main className="mx-auto container">
      <div className="w-full grid grid-cols-2 gap-8 m-auto justify-center items-center">
        {data.map((item) => (
          <BarChart key={item.key} data={item} />
        ))}
      </div>
    </main>
  );
}
