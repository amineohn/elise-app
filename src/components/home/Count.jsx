import React, { Component } from 'react'
import Icons from '@components/Icons'
import useSWR from 'swr'
import FadeIn from 'react-fade-in'
import { sql_query } from '../../libs/database'
const Count = () => {
    return (
        <FadeIn>
            <th className="py-3 pr-4 flex justify-center text-xs text-white bg-orange-500 pl-3 rounded-bl-lg">
                {doneCount} valeurs ont été enregistrer
            </th>
        </FadeIn>
    )
}
export default Count
