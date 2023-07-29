export default async function ErrorPage({ url }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <img width={200} src="icons/notfound.webp" alt="" />
      <p>
        Not found metrics for{" "}
        <span className="px-2 py-1 bg-slate-200 dark:text-black">{url}</span>.
        Verify that the URL is valid.
      </p>
    </div>
  );
}
