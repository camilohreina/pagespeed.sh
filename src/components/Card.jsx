import { BarChart } from "./BarChart";
import metrics from "../app/data/cwv.json";
export function Card({ data }) {
  const item = metrics[data.key];
  return (
    <>
      {item && (
        <div className=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img
            className="dark:invert"
            src={`./icons/${item?.icon}`}
            alt={item.title}
          />
          <h5 className="my-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {item?.title}
          </h5>
          <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
            {item?.description}
          </p>
          <div className="mt-12">
            <BarChart data={data} />
          </div>
        </div>
      )}
    </>
  );
}
