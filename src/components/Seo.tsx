import Head from "next/head";
import React from "react";
import config from "../config";

type Props = {
   description?: string;
   titleName?: string;
};

function SEO({ description = "", titleName }: Props): JSX.Element {
   const metaDescription = description || config.description;
   const title = titleName ?? `${config.title}`;
   const image = "/images/icon.png";
   return (
      <Head>
         <title>{`${title}`}</title>
         <meta name="description" content={metaDescription} />
         <meta property="og:title" content={title} />
         <meta property="og:description" content={metaDescription} />
         <meta property="og:type" content="website" />
         <meta name="og:image" content={config.url + image} />
         <meta name="twitter:card" content="summary" />
         <meta name="twitter:creator" content={config.author} />
         <meta name="twitter:title" content={title} />
         <meta name="twitter:description" content={metaDescription} />
      </Head>
   );
}
export default SEO;
