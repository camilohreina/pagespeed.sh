import { SearchBar } from "@/components/SearchBar";
import { getRecordsByWebSite } from "../services/records";
import { Card } from "@/components/Card";
import { CoreVitals } from "@/components/CoreVitals";
import ErrorPage from "@/components/ErrorPage";

export default async function Report({ searchParams }) {
  let data = null;
  const { url } = searchParams;

  data = await getRecordsByWebSite({ website: url });

  return (
    <main className="mx-auto gap-8 containerFluid">
      <SearchBar />
      <CoreVitals />
      {data?.length && (
        <div className="w-full my-8 items-stretch grid grid-cols-2 gap-8 m-auto justify-center ">
          {data.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      )}
      {data?.error && <ErrorPage url={url} />}
    </main>
  );
}
