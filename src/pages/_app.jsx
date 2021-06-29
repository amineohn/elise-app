import Head from 'next/head'
import { UserProvider } from '@auth0/nextjs-auth0'
import '@style/main.css'
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
