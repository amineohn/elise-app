import React from 'react'
import { motion } from 'framer-motion'
import { useUser } from '@auth0/nextjs-auth0'
import Logo from '@home/Logo'
import Type from '@home/Type'
import AddWeight from '@home/AddWeight'
import Icons from '@components/Icons'
import Table from '@home/Table'
import FadeIn from 'react-fade-in'

export default function Home() {
    const { user, error, isLoading } = useUser()
    if (isLoading) {
        return (
            <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center w-full h-screen overflow-hidden transition-all bg-white opacity-75 dark:bg-black">
                <div className="w-12 h-12 mb-4 ease-linear border-4 border-t-4 border-gray-100 rounded-full loader"></div>
            </div>
        )
    }
    return (
        <>
            <Logo />
            <FadeIn>
                <div className="app">
                    <div className="container">
                        <div className="space-y-5">
                            <div className="flex mt-5">
                                <a href="/api/auth/login">
                                    {user ? (
                                        <img
                                            className="image"
                                            src={user.picture}
                                        />
                                    ) : (
                                        <Icons icon="profile" />
                                    )}
                                    {error ? <Icons icon="profile" /> : ''}
                                </a>
                                <div className="mt-2 ml-1">
                                    {error ? (
                                        <p className="logged">
                                            {error.message}
                                        </p>
                                    ) : (
                                        ''
                                    )}
                                    {user ? (
                                        <span>
                                            Connecté en tant que {user.name}
                                        </span>
                                    ) : (
                                        <span className="text-sm inline text-center">
                                            Connectez-vous en appuyant sur
                                            l'icône
                                        </span>
                                    )}
                                </div>
                            </div>
                            <Type />
                        </div>
                    </div>
                    <AddWeight />
                    {user ? (
                        <div className="flex">
                            <button className="">
                                <a href="/api/auth/logout">Déconnexion</a>
                            </button>
                        </div>
                    ) : (
                        ''
                    )}

                    <table class="rounded-2xl rounded-bl-2xl m-5 w-3/6 mx-auto bg-gray-50 text-gray-800">
                        <tr class="text-left border-gray-100">
                            <th class="px-4 py-3">Table</th>
                        </tr>
                        <Table />
                    </table>
                </div>
            </FadeIn>
        </>
    )
}
