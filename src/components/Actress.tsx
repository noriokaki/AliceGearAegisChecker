import React, { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const image = require("../../assets/images/mystery-person.jpg");

type Props = {
   imagePath?: string;
   name: string;
   onClick: () => void;
};
const Actress = ({ imagePath = image, name, onClick }: Props): JSX.Element => {
   const [active, setActive] = useState(false);
   return (
      <div
         style={{
            border: "1px solid",
            borderRadius: "10px",
            overflow: "hidden",
         }}
         onClick={(): void => {
            setActive(!active);
            onClick;
         }}
      >
         {/* TODO gatsby-imageを使う方法に直す */}
         <img src={imagePath} style={{ opacity: active ? 1 : 0.5 }} />
         <div style={{ textAlign: "center" }}>{name}</div>
      </div>
   );
};

export default Actress;
