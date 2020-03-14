/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import GitHub from "@material-ui/icons/GitHub";
import Twitter from "@material-ui/icons/Twitter";
import { graphql, useStaticQuery } from "gatsby";
import React, { ReactNode } from "react";
import { SiteTitleQuery } from "../../types/graphql-types";
import Header from "./Header";
import "./layout.css";
import { ColorPalette } from "./palette";
type Props = {
   children: ReactNode;
};
const Layout = ({ children }: Props): JSX.Element => {
   const data: SiteTitleQuery = useStaticQuery(graphql`
      query SiteTitle {
         site {
            siteMetadata {
               title
            }
         }
      }
   `);

   if (data.site?.siteMetadata?.title == undefined) {
      throw new Error("no site title");
   }

   return (
      <>
         <Header siteTitle={data.site.siteMetadata.title} />
         <div
            style={{
               margin: `0 auto`,
               maxWidth: 960,
               padding: `0 1.0875rem 1.45rem`,
            }}
         >
            <main>{children}</main>
            <footer
               style={{
                  backgroundColor: ColorPalette.DefaultPrimary,
                  marginTop: "20px",
               }}
            >
               <div
                  style={{ display: "flex", justifyContent: "space-between" }}
               >
                  <div>
                     <span>ゲーム画像の著作権は提供元に帰属します。</span>
                  </div>
                  <address
                     style={{
                        padding: "10px",
                     }}
                  >
                     <a
                        href="https://twitter.com/HA_noriokaki"
                        rel="nofollow noopener noreferrer"
                        target="_blank"
                        title="@HA_noriokaki"
                        style={{ color: "black" }}
                     >
                        <Twitter />
                     </a>
                     <a
                        href="https://github.com/noriokaki/AliceGearAegisChecker"
                        rel="nofollow noopener noreferrer"
                        target="_blank"
                        title="githubリポジトリ"
                        style={{ color: "black" }}
                     >
                        <GitHub />
                     </a>
                  </address>
               </div>
            </footer>
         </div>
      </>
   );
};

export default React.memo(Layout);
