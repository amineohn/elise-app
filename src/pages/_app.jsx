import Head from "next/head";
import "../assets/styles/main.css";
function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Elise Production</title>
      </Head>
      <body>
        <Component {...pageProps} />
      </body>
    </>
  );
}
export default App;
