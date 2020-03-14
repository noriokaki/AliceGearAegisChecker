/* eslint-disable */
module.exports = {
   siteMetadata: {
      title: `アリス・ギア・アイギス 所属率チェッカー`,
      description: `アリス・ギア・アイギスのアクトレスの所属率チェッカーです。`,
      author: `@noriokaki`,
      url: "https://alice-gear-aegis-checker.netlify.com/"
   },
   plugins: [
      `gatsby-plugin-react-helmet`,
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `images`,
            path: `${__dirname}/assets/images`,
         },
      },
      `gatsby-transformer-json`,
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `data`,
            path: `${__dirname}/assets/data`,
            ignore: [`**/\.*`] // ドット始まりのファイルは無視
         },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
         resolve: `gatsby-plugin-manifest`,
         options: {
            name: `アリス・ギア・アイギス・所属率チェッカー`,
            short_name: `starter`,
            start_url: `/`,
            background_color: `#663399`,
            theme_color: `#663399`,
            display: `minimal-ui`,
            icon: `assets/images/icon.png`, // This path is relative to the root of the site.
         },
      },
      {
         resolve: "gatsby-plugin-graphql-codegen",
         options: {
            fileName: `types/graphql-types.d.ts`,
         },
      },
      `gatsby-plugin-typescript`,
      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.dev/offline
      `gatsby-plugin-offline`,
      {
         resolve: `gatsby-plugin-google-analytics`,
         options: {
            trackingId: "UA-160691166-1",
            head: true,
            respectDNT: true,
         },
      }
   ],
};
