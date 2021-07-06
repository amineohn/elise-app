import React from 'react'
import { motion } from 'framer-motion'
import { useUser } from '@auth0/nextjs-auth0'
import Logo from '@home/Logo'
import Type from '@home/Type'
import AddWeight from '@home/AddWeight'
import Icons from '@components/Icons'
import Table from '@home/Table'

export default function Home() {
    const { user, error, isLoading } = useUser()
    const style = { fontSize: 14.5, marginTop: 12, marginLeft: 3 }
    if (isLoading) {
        return (
            <div className="loading">
                <div className="lds-ripple">
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }

    const config = {
        visible: {
            y: 0,
            transition: {
                duration: 0.7,
                when: 'beforeChildren',
            },
        },
        hidden: { y: '-20vh' },
    }
    return (
        <>
            <Logo />
            <motion.div
                initial="hidden"
                animate="visible"
                variants={config}
                className="app"
            >
                <div className="container">
                    <div className="grid">
                        <div className="connected">
                            <a href="/api/auth/login">
                                <a>
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
                            </a>
                            <div className="login">
                                {error ? (
                                    <p className="logged">{error.message}</p>
                                ) : (
                                    ''
                                )}
                                {user ? (
                                    <p className="logged">
                                        <span>
                                            Connecté en tant que {user.name}
                                        </span>
                                    </p>
                                ) : (
                                    <p className="logged" style={style}>
                                        <span>
                                            Connectez-vous en appuyant sur
                                            l'icône
                                        </span>
                                    </p>
                                )}
                            </div>
                        </div>
                        <Type />
                    </div>
                </div>
                <AddWeight />
                <div className="box">
                    <table className="type">
                        <tr>
                            <td className="bold">Type</td>
                            <td className="bold">Matière</td>
                            <td className="bold">KG</td>
                        </tr>
                        <hr />
                        <Table />
                    </table>
                </div>
                {user ? (
                    <div className="box-hover">
                        <div className="type section">
                            <button className="button">
                                <a href="/api/auth/logout">Déconnexion</a>
                            </button>
                        </div>
                    </div>
                ) : (
                    ''
                )}
            </motion.div>
        </>
    )
}
