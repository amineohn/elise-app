import React, { useEffect, useState } from 'react'
import { useUser } from '@auth0/nextjs-auth0'
import Logo from '@components/Logo'
import Table from '@components/Table'
import FadeIn from 'react-fade-in'
import { useForm } from 'react-hook-form'
import io from 'socket.io-client'

import Link from 'next/link'
export default function Home() {
    const [, setMatter] = useState('')
    const [, setType] = useState('')
    const [, setWeight] = useState('')
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitSuccessful },
    } = useForm()
    const [socket, setSocket] = useState(null)
    useEffect(() => {
        const newSocket = io(`http://${window.location.hostname}:3001`)
        setSocket(newSocket)
        return () => newSocket.close()
    }, [setSocket])
    const onMatterChange = (e) => {
        setMatter(e.target.value)
    }
    const onTypeChange = (e) => {
        setType(e.target.value)
    }
    const onWeightChange = (e) => {
        setWeight(e.target.value)
    }
    const onSubmit = (data) => {
        socket.on('add', data)
        fetch(`http://${window.location.hostname}:3001/add`, {
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

    const { user, isLoading, error } = useUser()
    return (
        <>
            {isLoading ? (
                <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center w-full h-screen overflow-hidden transition-all bg-white dark:bg-black">
                    <div className="w-12 h-12 mb-4 ease-linear border-4 border-t-4 border-gray-100 rounded-full loader border-t-gray-800"></div>
                </div>
            ) : (
                <>
                    <FadeIn>
                        <Logo />
                    </FadeIn>
                    <FadeIn>
                        <div className="h-screen max-h-screen">
                            <div className="flex justify-center items-center flex-col mt-5">
                                <div className="space-y-5">
                                    <div className="flex mt-5">
                                        <FadeIn>
                                            <div className="mt-1 ml-1">
                                                {error ? (
                                                    <p className="logged">
                                                        {error.message}
                                                    </p>
                                                ) : (
                                                    ''
                                                )}
                                            </div>
                                        </FadeIn>
                                    </div>
                                    <div className="text-black space-x-2 flex justify-center xl:items-center">
                                        <form
                                            onSubmit={handleSubmit(onSubmit)}
                                            className="space-x-1"
                                        >
                                            {isSubmitSuccessful && (
                                                <FadeIn>
                                                    <span
                                                        role="alert"
                                                        className="text-green-50 font-medium ml-2 mb-4 bg-green-500 rounded-2xl p-3 flex justify-center items-center notification mt-2"
                                                    >
                                                        Les champs ont été
                                                        ajouter
                                                    </span>
                                                </FadeIn>
                                            )}
                                            {errors.weight && (
                                                <FadeIn>
                                                    <span
                                                        role="alert"
                                                        className="text-red-50 font-medium ml-2 mb-4 bg-red-500 rounded-2xl p-3 flex justify-center items-center notification mt-2"
                                                    >
                                                        Champ requis
                                                    </span>
                                                </FadeIn>
                                            )}
                                            <div className="space-x-1 flex justify-center">
                                                <input
                                                    className="outline-none appearance-none p-3 rounded-2xl border-2 border-orange-400 hover:border-orange-600 transition bg-white text-black placeholder-black w-36"
                                                    placeholder="Type"
                                                    onChange={onTypeChange}
                                                    {...register('type', {
                                                        required: true,
                                                    })}
                                                />
                                                <input
                                                    className="outline-none appearance-none p-3 rounded-2xl border-2 border-orange-400 hover:border-orange-600 transition bg-white placeholder-black text-black w-36"
                                                    name="matter"
                                                    placeholder="Matière"
                                                    onChange={onMatterChange}
                                                    {...register('matter', {
                                                        required: true,
                                                    })}
                                                />
                                            </div>
                                            <div className="mt-5 flex">
                                                <div className="flex justify-center">
                                                    <input
                                                        className="outline-none placeholder-black rounded-2xl p-2 text-black border-2 border-orange-400 hover:border-orange-600 transition w-52"
                                                        type="number"
                                                        placeholder="Saisir un poids"
                                                        ref="weight"
                                                        onChange={
                                                            onWeightChange
                                                        }
                                                        {...register('weight', {
                                                            required: true,
                                                        })}
                                                    />
                                                    &nbsp;
                                                    <button
                                                        aria-label="Submit"
                                                        type="submit"
                                                        className="outline-none bg-gray-800 flex p-2 rounded-2xl hover:bg-gray-700 transition text-white"
                                                    >
                                                        Ajouter
                                                    </button>
                                                    &nbsp;
                                                    <div className="outline-none bg-green-600 flex p-2 rounded-2xl hover:bg-green-500 transition text-white">
                                                        <Link href="/code">
                                                            Générer
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {socket ? (
                                <>
                                    <FadeIn>
                                        <div className="rounded-2xl m-10 w-999 w-96 mx-auto bg-gray-50 text-gray-800 h-96 overflow-y-auto border-2 border-orange-400 h-64 select-text">
                                            <div className="flex items-center justify-center">
                                                <tr className="">
                                                    <th className="px-4 py-3 space-x-5">
                                                        <table className="table-fixed">
                                                            <thead className="inline-flex space-x-3">
                                                                <tr>Type</tr>
                                                                <tr>Matière</tr>
                                                                <tr>Poids</tr>
                                                            </thead>
                                                        </table>
                                                    </th>
                                                </tr>
                                            </div>
                                            <tbody>
                                                <Table />
                                            </tbody>
                                        </div>
                                    </FadeIn>
                                </>
                            ) : (
                                <>
                                    <FadeIn>
                                        <div className="rounded-2xl m-10 w-4/6 sm:w-3/5 md:w-2/5 xl:w-1/3 2xl:w-1/3 mx-auto bg-gray-50 text-gray-800 h-96 animate-pulse">
                                            <tr className="text-left">
                                                <th className="flex justify-center space-x-5 loadData -mr-24">
                                                    Chargement des données..
                                                </th>
                                            </tr>
                                        </div>
                                    </FadeIn>
                                </>
                            )}
                            {user ? (
                                <>
                                    <div className="flex justify-center space-x-2">
                                        <img
                                            className="w-10 h-10 rounded-full"
                                            src="https://avatars.githubusercontent.com/u/38817327?v=4"
                                        />
                                        <span className="text-md inline text-center mt-1">
                                            Connecté en tant que Amine
                                        </span>
                                    </div>
                                </>
                            ) : (
                                <div className="w-52 justify-center items-center m-auto">
                                    <div className="outline-none bg-gray-700 flex p-4 rounded-2xl hover:bg-gray-800 transition text-white">
                                        <a
                                            href="api/auth/login"
                                            className="inline-flex space-x-2 justify-center items-center ml-8"
                                        >
                                            <svg
                                                className="w-6 h-6 fill-current text-white"
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fas"
                                                data-icon="user-circle"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 496 512"
                                            >
                                                <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path>
                                            </svg>{' '}
                                            <span>Connexion</span>
                                        </a>
                                    </div>
                                </div>
                            )}
                            {error ? (
                                <div className="w-52 justify-center items-center m-auto">
                                    <div className="outline-none bg-gray-700 flex p-4 rounded-2xl hover:bg-gray-800 transition text-white">
                                        <a
                                            href="api/auth/login"
                                            className="inline-flex space-x-2 justify-center items-center ml-8"
                                        >
                                            <svg
                                                className="w-6 h-6 fill-current text-white"
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fas"
                                                data-icon="user-circle"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 496 512"
                                            >
                                                <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path>
                                            </svg>{' '}
                                            <span>Connexion</span>
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                ''
                            )}
                        </div>
                    </FadeIn>
                </>
            )}
        </>
    )
}
