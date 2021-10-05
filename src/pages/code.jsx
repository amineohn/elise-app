import { useForm } from 'react-hook-form'
import react, { useState } from 'react'
import FadeIn from 'react-fade-in'
import Link from 'next/link'
const Codes = () => {
    const [, setCode] = useState('')
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitSuccessful },
    } = useForm()

    const onCodeChange = (e) => {
        setCode(e.target.value)
    }
    const onSubmit = (data) => {
        fetch(`http://localhost:3001/code`, {
            method: 'POST',
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
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <FadeIn>
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                <h3 className="text-2xl font-semibold text-black">
                                    Code d'accès génération des poids
                                </h3>
                            </div>
                            <div className="relative p-6 flex-auto">
                                <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                    {isSubmitSuccessful && (
                                        <FadeIn>
                                            <span
                                                role="alert"
                                                className="text-green-50 font-medium ml-2 mb-4 bg-green-500 rounded-2xl p-3 flex justify-center items-center notification"
                                            >
                                                Le code est bon, envoie en
                                                cours...
                                            </span>
                                        </FadeIn>
                                    )}
                                    {errors.code && (
                                        <FadeIn>
                                            <span
                                                role="alert"
                                                className="text-red-50 font-medium ml-2 mb-4 bg-red-500 rounded-2xl p-3 flex justify-center items-center notification"
                                            >
                                                Ce champ est requis...
                                            </span>
                                        </FadeIn>
                                    )}
                                    <form
                                        onSubmit={handleSubmit(onSubmit)}
                                        className="space-x-1"
                                    >
                                        <input
                                            className="outline-none appearance-none p-3 rounded-2xl border-2 border-orange-400 hover:border-orange-600 transition bg-white text-black placeholder-black w-36 space-x-1"
                                            placeholder="Code"
                                            onChange={onCodeChange}
                                            {...register('code', {
                                                required: true,
                                            })}
                                        />
                                        &nbsp;
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                            <Link
                                                type="button"
                                                href="/"
                                                className="text-gray-800 hover:bg-gray-700 hover:text-gray-900 hover:bg-opacity-25 rounded-2xl background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            >
                                                Retour
                                            </Link>
                                            <button
                                                aria-label="Submit"
                                                type="submit"
                                                className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-sm px-6 py-3 rounded-2xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            >
                                                Générer
                                            </button>
                                        </div>
                                    </form>
                                </p>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </>
    )
}
export default Codes
