import React, { Component } from 'react'
import Icons from '@components/Icons'
import useSWR from 'swr'
import FadeIn from 'react-fade-in'
import { sql_query } from '../../libs/database'
const Table = () => {
    const Delete = async (id) => {
        try {
            const results = await sql_query(`DELETE FROM data WHERE id = ${id}`)
            console.log(results)
            return results
        } catch (e) {
            console.log(JSON.stringify(e.message))
        }
    }
    const { data } = useSWR('/api/list')
    const table = data
    if (!table == null) {
        return (
            <div className="bots">
                <h5 className="texts">no data is available.</h5>
            </div>
        )
    }

    return (
        <>
            {table ? (
                <>
                    {' '}
                    {table.map((item) => (
                        <FadeIn>
                            <tr className="bg-gray-50 border-b border-gray-100 flex items-center">
                                <div className="items-center flex justify-center mx-9 md:mx-10 sm:mx-20 xl:mx-28 2xl:mx-48">
                                    <td className="px-4 py-3 rounded-2xl">
                                        Canettes
                                    </td>
                                    <td className="px-4 py-3 rounded-2xl">
                                        PET
                                    </td>
                                    <td className="px-4 py-3 rounded-2xl">
                                        {item.weight}
                                        <span className="text-xs">kg</span>
                                    </td>
                                </div>
                            </tr>
                        </FadeIn>
                    ))}
                </>
            ) : (
                <FadeIn>
                    <tr className="bg-gray-50 border-b border-gray-100 flex items-center animate-pulse">
                        <div className="m-2 items-center flex"></div>
                    </tr>
                </FadeIn>
            )}
        </>
    )
}
export default Table
