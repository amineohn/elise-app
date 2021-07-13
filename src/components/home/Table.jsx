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
                <h5 className="texts">no more results.</h5>
            </div>
        )
    }
    if (!table)
        return (
            <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center w-full h-screen overflow-hidden transition-all bg-white opacity-75 dark:bg-black">
                <div className="w-12 h-12 mb-4 ease-linear border-4 border-t-4 border-gray-100 rounded-full loader"></div>
            </div>
        )
    return (
        <>
            {table.map((item) => (
                <FadeIn>
                    <tr class="bg-gray-100 pl-2 border-b">
                        <td class="px-4 py-3 rounded-2xl">Canettes</td>
                        <td class="px-4 py-3 rounded-2xl">PET</td>
                        <td class="px-4 py-3 rounded-2xl">
                            {item.weight}
                            <span className="text-xs">kg</span>
                        </td>
                    </tr>
                </FadeIn>
            ))}
        </>
    )
}
export default Table
