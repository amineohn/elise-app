import logo from '../public/img/logo.jpg'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import FadeIn from 'react-fade-in'
const LoadingLogo = () => {
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
        <FadeIn>
            <div className="flex justify-center items-center p-5 bg-white">
                {loading ? (
                    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center w-full h-screen overflow-hidden transition-all bg-white dark:bg-black">
                        <div className="w-12 h-12 mb-4 ease-linear border-4 border-t-4 border-gray-100 rounded-full loader border-t-gray-800"></div>
                    </div>
                ) : (
                    <Link href="/">
                        <a>
                            <img
                                src="https://www.elise.com.fr/assets/templates/meridian/images/logo.jpg"
                                alt=""
                            />
                        </a>
                    </Link>
                )}
            </div>
        </FadeIn>
    )
}
export default LoadingLogo
