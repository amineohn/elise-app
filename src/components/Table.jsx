import React, { useState } from 'react'
import useSWR from 'swr'
import FadeIn from 'react-fade-in'
import Icons from './Icons'
import { useForm } from 'react-hook-form'
const Table = () => {
    const [, setDelete] = useState('')
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitSuccessful },
    } = useForm()
    const onDeleteChange = (e) => {
        setDelete(e.target.value)
    }
    const { data } = useSWR('/api/list')
    const onSubmit = (data) => {
        /*window.open(
            `mailto:aouhani@actes-atlantique.fr?body=${encodeURIComponent(
                `[Poids au jours] \n\n Liste des maitères: ${data.matter.length} \n Poids total: ${data.weight} \n Type: ${data.type}`
            )}`
        )*/

        fetch(`http://localhost:3001/delete`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...data }),
        })
            .then((response) => response.json())
            .then((body) => console.log(body))
    }

    return (
        <>
            {data ? (
                data.map((item) => (
                    <FadeIn>
                        {isSubmitSuccessful && (
                            <FadeIn>
                                <span
                                    role="alert"
                                    className="text-green-50 font-medium ml-2 mb-4 bg-red-500 rounded-2xl p-3 flex justify-center items-center notification"
                                >
                                    Les champs a bien été supprimer.
                                </span>
                            </FadeIn>
                        )}
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
                                <form action={handleSubmit(onSubmit)}>
                                    <svg
                                        onChange={onDeleteChange}
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
                                    <svg
                                        className="w-5 h-5 fill-current text-green-500"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="highlighter"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 544 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M0 479.98L99.92 512l35.45-35.45-67.04-67.04L0 479.98zm124.61-240.01a36.592 36.592 0 0 0-10.79 38.1l13.05 42.83-50.93 50.94 96.23 96.23 50.86-50.86 42.74 13.08c13.73 4.2 28.65-.01 38.15-10.78l35.55-41.64-173.34-173.34-41.52 35.44zm403.31-160.7l-63.2-63.2c-20.49-20.49-53.38-21.52-75.12-2.35L190.55 183.68l169.77 169.78L530.27 154.4c19.18-21.74 18.15-54.63-2.35-75.13z"
                                        ></path>
                                    </svg>
                                </form>
                            </div>
                        </tr>
                    </FadeIn>
                ))
            ) : (
                <FadeIn>
                    <div className="rounded-2xl m-10 w-4/6 sm:w-3/5 md:w-2/5 xl:w-1/3 2xl:w-1/3 mx-auto bg-gray-50 text-gray-800 h-96 overflow-y-auto animate-pulse">
                        <tr className="text-left">
                            <th className="px-4 py-3 flex justify-center space-x-5 loadData">
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
