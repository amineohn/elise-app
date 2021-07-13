import logo from '../../assets/img/logo.jpg'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
const LoadingLogo = () => {
    const config = {
        visible: {
            y: 0,
            transition: {
                duration: 0.7,
                when: 'beforeChildren',
            },
        },
        hidden: { y: '-10vh' },
    }
    const [loading, setLoading] = useState(true)
    const cacheImages = async (array) => {
        const promises = await array.map((src) => {
            return new Promise(function (resolve, reject) {
                const loadImage = new Image()

                loadImage.src = src
                loadImage.onload = resolve()
                loadImage.onerror = reject()
            })
        })

        await Promise.all(promises)

        setLoading(false)
    }
    useEffect(() => {
        cacheImages([logo])
    })
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={config}
            className="logo"
        >
            {loading ? (
                <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center w-full h-screen overflow-hidden transition-all bg-white opacity-75 dark:bg-black">
                    <div className="w-12 h-12 mb-4 ease-linear border-4 border-t-4 border-gray-100 rounded-full loader"></div>
                </div>
            ) : (
                <Link href="/">
                    <a>
                        <img src={logo} alt="" />
                    </a>
                </Link>
            )}
        </motion.div>
    )
}
export default LoadingLogo
