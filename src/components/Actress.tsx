import React, { Dispatch, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { ActionType, select, unselect } from "../models/ActionCreator";
import { ActressType } from "../models/DataTypes";
import ActressImage from "./ActressImage";

type Props = {
   actress: ActressType;
   dispatch: Dispatch<ActionType>;
};
const Actress = ({ actress, dispatch }: Props): JSX.Element => {
   const isMobile = useMediaQuery({ maxWidth: "365px" });
   const [active, setActive] = useState(actress.isSelect);
   const onClickHandler = (): void => {
      setActive(!active);
      if (active) {
         dispatch(unselect(actress.id));
      } else {
         dispatch(select(actress.id));
      }
   };
   return (
      <div
         style={{
            border: "1px solid",
            borderRadius: "10px",
            overflow: "hidden",
            width: isMobile ? "8em" : "9em",
            userSelect: "none",
            backgroundColor: active ? "#FFFF" : "rgb(245, 245, 245)",
         }}
         onClick={onClickHandler}
      >
         <span style={{ opacity: active ? 1 : 0.5 }}>
            <ActressImage filename={actress.imagePath}></ActressImage>
         </span>
         <div style={{ textAlign: "center" }}>
            {(actress.another ? "(A)" : "") +
               (actress.shortName || actress.name)}
         </div>
      </div>
   );
};

export default React.memo(Actress);
