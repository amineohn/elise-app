import React from 'react'
import { useUser } from '@auth0/nextjs-auth0'
import Logo from '@home/Logo'
import Type from '@home/Type'
import AddWeight from '@home/AddWeight'
import Icons from '@components/Icons'
import Table from '@home/Table'
import FadeIn from 'react-fade-in'
import { sql_query } from '../libs/database'
export default function Home() {
    const { user, error, isLoading } = useUser()
    return (
        <>
            {isLoading ? (
                <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center w-full h-screen overflow-hidden transition-all bg-white opacity-75 dark:bg-black">
                    <div className="w-12 h-12 mb-4 ease-linear border-4 border-t-4 border-gray-100 rounded-full loader border-t-orange-500"></div>
                </div>
            ) : (
                <>
                    <FadeIn>
                        <Logo />
                    </FadeIn>
                    <FadeIn>
                        <div className="h-screen max-h-screen bg-orange-500">
                            <div className="flex justify-center items-center">
                                <div className="space-y-5">
                                    <div className="flex mt-5">
                                        <FadeIn>
                                            <a href="/api/auth/login">
                                                {user ? (
                                                    <img
                                                        className="w-10 h-10 rounded-full"
                                                        src={user.picture}
                                                    />
                                                ) : (
                                                    <Icons icon="profile" />
                                                )}
                                                {error ? (
                                                    <Icons icon="profile" />
                                                ) : (
                                                    ''
                                                )}
                                            </a>
                                        </FadeIn>
                                        <FadeIn>
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
                                                        Connecté en tant que{' '}
                                                        {user.name}
                                                    </span>
                                                ) : (
                                                    <span className="text-sm inline text-center">
                                                        Connectez-vous en
                                                        appuyant sur l'icône
                                                    </span>
                                                )}
                                            </div>
                                        </FadeIn>
                                    </div>
                                    <Type />
                                </div>
                            </div>
                            <FadeIn>
                                <AddWeight />
                            </FadeIn>
                            <FadeIn>
                                <div className="rounded-2xl m-10 w-5/6 sm:w-3/5 md:w-2/5 xl:w-1/3 2xl:w-1/3 mx-auto bg-gray-50 text-gray-800 h-96 overflow-y-auto">
                                    <tr className="text-left">
                                        <th className="px-4 py-3 flex justify-center space-x-5">
                                            Tableaux
                                        </th>
                                    </tr>
                                    <Table />
                                </div>
                            </FadeIn>
                        </div>
                        {user ? (
                            <FadeIn>
                                <div className="fixed z-20 flex items-center justify-center px-2 py-2 space-x-2 capitalize transition duration-200 bg-white rounded-full shadow-sm cursor-pointer select-none text-gray-50 bottom-4 right-4 focus:outline-none bg-opacity-20 hover:bg-opacity-25 dark:hover:bg-opacity-25">
                                    <button className="">
                                        <a href="/api/auth/logout">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                                <polyline points="16 17 21 12 16 7"></polyline>
                                                <line
                                                    x1="21"
                                                    y1="12"
                                                    x2="9"
                                                    y2="12"
                                                ></line>
                                            </svg>
                                        </a>
                                    </button>
                                </div>
                            </FadeIn>
                        ) : (
                            ''
                        )}
                    </FadeIn>{' '}
                </>
            )}
        </>
    )
}
