import React from 'react'
import useSWR from 'swr'
import FadeIn from 'react-fade-in'
const Table = () => {
    const { data } = useSWR('/api/list')
    return (
        <>
            {data ? (
                data.map((item) => (
                    <FadeIn>
                        <tr className="bg-gray-50 border-b border-gray-100 flex items-center">
                            <div className="items-center flex justify-center mx-9 md:mx-40 sm:mx-20 xl:mx-28 2xl:mx-48">
                                <td className="px-4 py-3 rounded-2xl">
                                    {item.type}
                                </td>
                                <td className="px-4 py-3 rounded-2xl">
                                    {item.matter}
                                </td>
                                <td className="px-4 py-3 rounded-2xl">
                                    {item.weight}
                                    <span className="text-xs">kg</span>
                                </td>
                            </div>
                        </tr>
                    </FadeIn>
                ))
            ) : (
                <FadeIn>
                    <div className="rounded-2xl m-10 w-4/6 sm:w-3/5 md:w-2/5 xl:w-1/3 2xl:w-1/3 mx-auto bg-gray-50 text-gray-800 h-96 overflow-y-auto animate-pulse">
                        <tr className="text-left">
                            <th className="px-4 py-3 flex justify-center space-x-5">
                                Chargement des données..
                            </th>
                        </tr>
                    </div>
                </FadeIn>
            )}
        </>
    )
}
export default Table
