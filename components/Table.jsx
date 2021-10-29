import React, { useEffect, useState } from "react";
import useSWR from "swr";
import io from "socket.io-client";
import FadeIn from "react-fade-in";
const Table = () => {
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
        ) : null
      ) : (
        <FadeIn>
          <div className="rounded-2xl m-10 w-4/6 sm:w-3/5 md:w-2/5 xl:w-1/3 2xl:w-1/3 mx-auto bg-gray-50 text-gray-800 h-96 animate-pulse">
            <tr className="text-left">
              <th className="flex justify-center space-x-5 loadData -mr-24">
                Chargement des données..
              </th>
            </tr>
          </div>
        </FadeIn>
      )}
    </>
  );
};
export default Table;
