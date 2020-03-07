import { Grid } from "@material-ui/core";
import React from "react";
import Actress from "./Actress";

const actressesDummy = (): JSX.Element[] => {
   const list: JSX.Element[] = [];

   const max = 80;
   let count = 0;
   while (count !== max) {
      list.push(
         <Grid item key={count}>
            <Actress
               name={`名前${count}`}
               onClick={(): void => {
                  return undefined;
               }}
            />
         </Grid>,
      );
      count++;
   }
   return list;
};

const ActressesList = (): JSX.Element => {
   return (
      <Grid container spacing={1}>
         {actressesDummy()}
      </Grid>
   );
};
export default ActressesList;
