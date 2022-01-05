import useSWR from "swr";
const Matters = () => {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/matters", fetcher);
  return (
    <>
      {data ? (
        data.map((item) => <option list="matters">{item.name}</option>)
      ) : (
        <option list="matters">
          <div className="rounded-2xl m-10 w-4/6 sm:w-3/5 md:w-2/5 xl:w-1/3 2xl:w-1/3 mx-auto bg-neutral-50 text-neutral-800 h-96 animate-pulse">
            <div className="flex justify-center space-x-5 loadData">
              <div className="flex space-x-1 justify-center">
                <svg
                  className="animate-spin h-5 w-5 text-orange-500 dark:text-orange-100"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <span data-interception="off">Chargement..</span>
              </div>
            </div>
          </div>
        </option>
      )}
    </>
  );
};
export default Matters;
