import Head from "next/head";
import { UserProvider } from "@auth0/nextjs-auth0";

import "../styles/app.css";
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
