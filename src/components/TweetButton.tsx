import Twitter from "@material-ui/icons/Twitter";
import React from "react";
import { useMediaQuery } from "react-responsive";
import config from "../config";
type Props = {
   text?: string;
};

const TweetButton = ({ text = "" }: Props): JSX.Element => {
   const isMobile = useMediaQuery({ maxWidth: "450px" });
   const url = config.url;
   return (
      <div
         style={{
            display: "absolute",
            width: isMobile ? "35px" : "76px",
            backgroundColor: "#1b95e0",
            marginTop: "-7px",
         }}
      >
         <a
            href={`https://twitter.com/share?url=${url}&hashtags=アリスギアアイギスチェッカー&text=${encodeURIComponent(
               text,
            )}`}
            rel="nofollow noopener noreferrer"
            target="_blank"
            title="Tweet"
         >
            <Twitter style={{ color: "#FFFFFF" }} />
            <span
               style={{
                  userSelect: "none",
                  fontSize: "16px",
                  lineHeight: "26px",
                  textAlign: "left",
                  color: "#fff",
                  display: isMobile ? "none" : "inline-block",
                  verticalAlign: "top",
                  whiteSpace: "nowrap",
                  marginLeft: "4px",
               }}
            >
               Tweet
            </span>
         </a>
      </div>
   );
};
export default React.memo(TweetButton);
