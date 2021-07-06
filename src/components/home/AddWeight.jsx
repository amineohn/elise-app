import React from 'react'
import Icons from '@components/Icons'
import useSWR from 'swr'
import { sql_query } from '../../libs/database'
const AddWeight = () => {
    const { data } = useSWR('/api/insert')
    return (
        <div className="data">
            <input
                className="enter"
                type="number"
                placeholder="Saisir un poids"
                id="completed"
            />
            &nbsp;
            <button className="enter-submit poids gray">
                <Icons icon="login" />
                Ajouter
            </button>
        </div>
    )
}

export default AddWeight
