import { MainChart } from "./components/MainChart";
import { getRecordsByWebSite } from "./services/records";
import { Card } from "./components/Card.jsx";
export default async function Home() {
  const data = await getRecordsByWebSite({ website: "https://google.com" });

  return (
    <main className="mx-auto container">
      <div className="w-full grid grid-cols-2 gap-8 m-auto justify-center items-center">
        {data.map((item) => (
          <Card key={item.key} data={item} />
        ))}
      </div>
    </main>
  );
}
