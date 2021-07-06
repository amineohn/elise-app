import React, { Component } from 'react'
import Icons from '@components/Icons'
import useSWR from 'swr'
const Table = () => {
    const { data } = useSWR('/api/list')
    const table = data
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
                <tr>
                    <>
                        <td>{item.type}</td>
                        <td>{item.matter}</td>
                        <td>
                            {item.weight}
                            <button
                                className={
                                    item.edit ? 'valid orange' : 'valid gray'
                                }
                                type="submit"
                            >
                                <Icons icon={item.edit ? 'add' : 'delete'} />
                            </button>
                        </td>
                    </>
                </tr>
            ))}
        </>
    )
}
export default Table
