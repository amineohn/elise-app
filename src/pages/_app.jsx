import Head from "next/head";
import "../assets/styles/main.css";
function App({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <body>
        <Component {...pageProps} />
      </body>
    </>
  );
}
export default App;
