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
                    <tr className="bg-gray-50 border-b border-gray-100 flex items-center animate-pulse"></tr>
                </FadeIn>
            )}
        </>
    )
}
export default Table
