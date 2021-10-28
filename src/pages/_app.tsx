import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import Config from "../config";
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
         />{/* windows */}
         <meta
            name="msapplication-square70x70logo"
            content="/favicons/site-tile-70x70.png"
         />
         <meta
            name="msapplication-square150x150logo"
            content="/favicons/site-tile-150x150.png"
         />
         <meta
            name="msapplication-wide310x150logo"
            content="/favicons/site-tile-310x150.png"
         />
         <meta
            name="msapplication-square310x310logo"
            content="/favicons/site-tile-310x310.png"
         />
         <meta name="msapplication-TileColor" content="#000" />
         {/* safari */}
         <meta name="apple-mobile-web-app-capable" content="yes" />
         <meta name="apple-mobile-web-app-status-bar-style" content="#000" />
         <meta name="apple-mobile-web-app-title" content={Config.title} />
         <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/icon-192x192.png"
         />
         {/* 一般 */}
         <meta name="application-name" content={Config.title} />
         <meta name="theme-color" content="#000" />
         <meta name="description" content={Config.description} />
         <link rel="icon" sizes="192x192" href="/favicons/icon-192x192.png" />
         <link rel="icon" href="/favicon.ico" />
         <link rel="manifest" href="/manifest.json" />
      </Head>
      <Component {...pageProps} /></>;
}

export default App;
