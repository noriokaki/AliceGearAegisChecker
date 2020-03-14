import { Grid } from "@material-ui/core";
import React, { Dispatch } from "react";
import { ActionType } from "../models/ActionCreator";
import { ActressType } from "../models/DataTypes";
import Actress from "./Actress";
import useHasMounted from "./useHasMountedHook";

type Props = {
   actresses: readonly ActressType[];
   dispatch: Dispatch<ActionType>;
};
const createList = ({ actresses, dispatch }: Props): JSX.Element[] => {
   return actresses.map((a) => (
      <Grid item key={a.id}>
         <Actress actress={a} dispatch={dispatch} />
      </Grid>
   ));
};

const ActressesList = ({ actresses, dispatch }: Props): JSX.Element | null => {
   const hasMounted = useHasMounted();
   if (!hasMounted) {
      return null;
   }
   const list = createList({ actresses, dispatch });
   return (
      <Grid container spacing={1}>
         {list}
      </Grid>
   );
};
export default React.memo(ActressesList);
