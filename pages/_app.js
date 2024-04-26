import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (<>
    <Head>
      <title>
        Calculator
      </title>
    </Head>
    < Component {...pageProps } />
  </>) ;
}
