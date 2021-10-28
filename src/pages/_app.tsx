import { AppProps } from "next/app";
import React from "react";
import "./layout.css";

function App({ Component, pageProps }: AppProps): JSX.Element {
   return <Component {...pageProps} />;
}

export default App;
