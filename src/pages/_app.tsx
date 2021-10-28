import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import "./layout.css";
const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || '';
function App({ Component, pageProps }: AppProps): JSX.Element {
   return <>
      <Head>
         <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
         <script
            dangerouslySetInnerHTML={{
               __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}');`,
            }}
         />
      </Head>
      <Component {...pageProps} /></>;
}

export default App;
