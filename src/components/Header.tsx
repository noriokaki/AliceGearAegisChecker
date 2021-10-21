import Link from "next/link";
import React from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./Header.module.css";
import { BackgroundColor } from "./palette";
type Props = {
   siteTitle: string;
};

const Header = ({ siteTitle }: Props): JSX.Element => {
   const isMobile = useMediaQuery({ maxWidth: "395px" });
   return (
      <header
         style={{
            background: BackgroundColor.DefaultPrimary,
            marginBottom: `1.45rem`,
         }}
      >
         <div
            style={{
               margin: `0 auto`,
               maxWidth: 960,
               minWidth: 300,
               padding: `1.45rem 1.0875rem`,
            }}
         >
            <h1 style={{ margin: 0, fontSize: isMobile ? "1.2em" : "2rem" }}>
               <Link href="/">
                  <a className={styles.link}>{siteTitle}</a>
               </Link>
            </h1>
         </div>
      </header>
   );
};

export default Header;
