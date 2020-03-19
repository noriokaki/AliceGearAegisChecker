import React from "react";
import { useMediaQuery } from "react-responsive";
import actressFilter from "../models/ActressFilter";
import { ActressType, StateType } from "../models/DataTypes";
import { BackgroundColor, TextColor } from "./palette";
import TweetButton from "./TweetButton";

type Props = { state: StateType };

const createRateText = (actresses: readonly ActressType[]): string => {
   const selectActressesNum = actresses.filter((v) => v.isSelect).length;
   const rate = selectActressesNum / actresses.length;
   const displayRate = Math.round(rate * 10000) / 100;
   return `${displayRate}% (${selectActressesNum}/${actresses.length})`;
};

/**
 * 所属率
 */
const AffiliationRate = ({ state }: Props): JSX.Element => {
   const isMobile = useMediaQuery({ maxWidth: 767 });
   const actresses = state.actresses;
   return (
      <>
         <div
            style={{
               border: "1px solid",
               position: "sticky",
               margin: 0,
               top: 0,
               height: isMobile ? "2.2em" : "2em",
               textAlign: "center",
               color: TextColor.LightPrimary,
               backgroundColor: BackgroundColor.DarkPrimary,
               opacity: 0.8,
               fontSize: isMobile ? "1.5em" : "2.0em",
               zIndex: 3,
            }}
         >
            全体：{createRateText(actresses)}
            <TweetButton
               text={`${createRateText(actresses).replace(
                  "%",
                  "%25",
               )}のアクトレスをスカウトしました`}
            />
            <p
               style={{
                  fontSize: isMobile ? "1rem" : "1.6rem",
                  position: "relative",
                  top: isMobile ? "-15px" : "-5px",
                  visibility:
                     actresses.length === actressFilter(state).length
                        ? "hidden"
                        : "inherit",
               }}
            >
               フィルター対象：{createRateText(actressFilter(state))}
            </p>
         </div>
      </>
   );
};

export default React.memo(AffiliationRate);
