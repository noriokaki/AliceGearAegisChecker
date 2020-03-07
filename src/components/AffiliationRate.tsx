import React from "react";
import { BackgroundColor, TextColor } from "./palette";
/**
 * 所属率
 */
const AffiliationRate = (): JSX.Element => {
   return (
      <p
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
         }}
      >
         54% (32/80)
      </p>
   );
};

export default AffiliationRate;
