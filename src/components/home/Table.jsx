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
            <div className="bod">
                <div className="lds-ripple">
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    return (
        <>
            {table.map((item) => (
                <FadeIn>
                    <tr>
                        <>
                            <td>{item.type}</td>
                            <td>{item.matter}</td>
                            <td>{item.weight}</td>
                        </>
                    </tr>
                </FadeIn>
            ))}
        </>
    )
}
export default Table
