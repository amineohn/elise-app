import Head from 'next/head'
import '../assets/styles/main.css'
import { UserProvider } from '@auth0/nextjs-auth0'
function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Elise Production</title>
            </Head>
            <body>
                <UserProvider>
                    <Component {...pageProps} />
                </UserProvider>
            </body>
        </>
    )
}
export default App
