import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import io from 'socket.io-client'
import FadeIn from 'react-fade-in'
const Table = () => {
    const [deleteId, setDelete] = useState('')
    const { data } = useSWR('/api/list')
    const [socket, setSocket] = useState(null)
    useEffect(() => {
        const newSocket = io(`http://${window.location.hostname}:3001`)
        setSocket(newSocket)
        return () => newSocket.close()
    }, [setSocket])
    const handleDelete = (e) => {
        socket.on('delete', e.target.id)
        fetch(`http://localhost:3001/delete/${e.target.id}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then(() => setDelete(deleteId))
    }
    useEffect(() => {
        console.log(deleteId)
    }, [])

    return (
        <>
            {data
                ? data.map((item) => (
                      <FadeIn>
                          <tr className="bg-gray-50 border-b border-gray-100 flex items-center">
                              <div className="items-center flex justify-center mx-16 md:mx-16 sm:mx-10 xl:mx-16 2xl:mx-16">
                                  <td
                                      id={item.id}
                                      key={item.id}
                                      className="px-4 py-3 rounded-2xl"
                                      onClick={handleDelete}
                                  >
                                      {item.type}
                                  </td>
                                  <td
                                      id={item.id}
                                      key={item.id}
                                      className="px-4 py-3 rounded-2xl"
                                      onClick={handleDelete}
                                  >
                                      {item.matter}
                                  </td>
                                  <td
                                      id={item.id}
                                      key={item.id}
                                      className="px-4 py-3 rounded-2xl"
                                      onClick={handleDelete}
                                  >
                                      {item.weight}
                                      <span className="text-xs">kg</span>
                                  </td>
                                  <button
                                      onClick={handleDelete}
                                      aria-label="Submit"
                                      type="submit"
                                  >
                                      <svg
                                          className="w-5 h-5 fill-current text-red-500"
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="fas"
                                          data-icon="times-circle"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 512 512"
                                      >
                                          <path
                                              fill="currentColor"
                                              d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
                                          ></path>
                                      </svg>
                                  </button>
                              </div>
                          </tr>
                      </FadeIn>
                  ))
                : null}
        </>
    )
}
export default Table
