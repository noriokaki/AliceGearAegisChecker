import React from "react";
import { StateType } from "../models/DataTypes";
import { BackgroundColor, TextColor } from "./palette";
import TweetButton from "./TweetButton";

type Props = Pick<StateType, "actresses">;

/**
 * 所属率
 */
const AffiliationRate = ({ actresses }: Props): JSX.Element => {
   const rate = actresses.filter((v) => v.isSelect).length / actresses.length;
   const displayRate = Math.round(rate * 10000) / 100;
   return (
      <>
         <div
            style={{
               border: "1px solid",
               position: "sticky",
               margin: 0,
               top: 0,
               height: "2em",
               textAlign: "center",
               color: TextColor.LightPrimary,
               backgroundColor: BackgroundColor.DarkPrimary,
               opacity: 0.8,
               fontSize: "2.0em",
               zIndex: 3,
            }}
         >
            {displayRate}% ({actresses.filter((v) => v.isSelect).length}/
            {actresses.length})
            <TweetButton
               text={`${displayRate}%25のアクトレスをスカウトしました`}
            />
         </div>
      </>
   );
};

export default React.memo(AffiliationRate);
