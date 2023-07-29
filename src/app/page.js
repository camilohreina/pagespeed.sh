import { SearchBar } from "../components/SearchBar";

export default function Home() {
  return (
    <main className="containerFluid">
      <div className="flex my-36 flex-col justify-center items-center gap-16">
        <img src="./icons/chart.svg" width={400} alt="Web Stats"></img>
        <SearchBar />
      </div>
    </main>
  );
}
