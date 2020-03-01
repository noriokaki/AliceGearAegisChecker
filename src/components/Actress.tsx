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
         onClick={(): void => {
            setActive(!active);
            onClick;
         }}
      >
         {/* TODO gatsby-imageを使う方法に直す */}
         <img src={imagePath} />
         <div>{name}</div>
      </div>
   );
};

export default Actress;
