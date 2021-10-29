import Head from "next/head";
import "../styles/app.css";
import { UserProvider } from "@auth0/nextjs-auth0";
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
      <script src="https://cdn.jsdelivr.net/npm/datalist-css/dist/datalist-css.min.js"></script>
      </body>

    </>
  );
}
export default App;
