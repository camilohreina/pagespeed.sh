import { MainChart } from "./components/MainChart";
import { getRecordsByWebSite } from "./services/records";

export default async function Home() {
  const data = await getRecordsByWebSite({ website: "https://google.com" });
  console.log(data);
  return (
    <main className="flex container m-auto flex-col items-center">
      <div className="w-full grid grid-cols-2 gap-4 m-auto justify-center items-center">
        {data.map((item) => (
          <div key={item.key} className="flex justify-center items-center">
            <MainChart data={item} />
          </div>
        ))}
      </div>
    </main>
  );
}
