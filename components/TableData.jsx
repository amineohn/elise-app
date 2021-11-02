import React, { useEffect, useState } from "react";
import useSWR from "swr";
import io from "socket.io-client";
import FadeIn from "react-fade-in";
const TableData = () => {
  const [deleteId, setDelete] = useState("");
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/list", fetcher);
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:3001`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);
  const handleDelete = (e) => {
    socket.on("delete", e.target.id);
    fetch(`http://${window.location.hostname}:3001/delete/${e.target.id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => setDelete(deleteId));
  };
  useEffect(() => {
    console.log(deleteId);
  }, []);

  return (
    <>
      {socket ? (
        data ? (
          data.map((item) => (
            <FadeIn>
              <tr className="bg-gray-50 border-b border-gray-100 flex items-center">
                <div className="items-center flex justify-center mx-16 md:mx-16 sm:mx-10 xl:mx-16 2xl:mx-16">
                  <td
                    id={item.id}
                    key={item.id}
                    className="px-4 py-3 rounded-2xl cursor-pointer"
                    onClick={handleDelete}
                  >
                    {item.type}
                  </td>
                  <td
                    id={item.id}
                    key={item.id}
                    className="px-4 py-3 rounded-2xl cursor-pointer"
                    onClick={handleDelete}
                  >
                    {item.matter}
                  </td>
                  <td
                    id={item.id}
                    key={item.id}
                    className="px-4 py-3 rounded-2xl cursor-pointer"
                    onClick={handleDelete}
                  >
                    {item.weight}
                    <span className="text-xs">kg</span>
                  </td>
                </div>
              </tr>
            </FadeIn>
          ))
        ) : (
          <>
            <FadeIn>
              <div className="rounded-2xl m-10 w-4/6 sm:w-3/5 md:w-2/5 xl:w-1/3 2xl:w-1/3 mx-auto bg-gray-50 text-gray-800 h-96 animate-pulse">
                <div className="flex justify-center space-x-5 loadData ">
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
            </FadeIn>
          </>
        )
      ) : (
        <FadeIn>
          <div className="rounded-2xl m-10 w-4/6 sm:w-3/5 md:w-2/5 xl:w-1/3 2xl:w-1/3 mx-auto bg-gray-50 text-gray-800 h-96 animate-pulse">
            <div className="flex justify-center space-x-5 loadData -mr-24">
              <div className="flex space-x-1 justify-center">
                <svg
                  className="animate-spin h-5 w-5 text-gray-900 dark:text-gray-100"
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
        </FadeIn>
      )}
    </>
  );
};
export default TableData;
