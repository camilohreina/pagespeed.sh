import { BarChart } from "./BarChart";
import metrics from "../data/cwv.json";
export function Card({ data }) {
  console.log("metrics");
  console.log(metrics);
  const item = metrics[data.key];
  console.log(item);
  return (
    <>
      {item && (
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item?.title}
          </h5>

          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {item?.description}
          </p>
          <BarChart data={data} />
        </div>
      )}
    </>
  );
}
