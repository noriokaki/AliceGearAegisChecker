import { Grid } from "@material-ui/core";
import React, { Dispatch } from "react";
import { ActionType } from "../models/ActionCreator";
import actressFilter from "../models/ActressFilter";
import { StateType } from "../models/DataTypes";
import Actress from "./Actress";
import useHasMounted from "./useHasMountedHook";

type Props = {
   state: StateType;
   dispatch: Dispatch<ActionType>;
};
const createList = ({ state, dispatch }: Props): JSX.Element[] => {
   const visibleActressesId: string[] = actressFilter(state).map((v) => v.id);
   return state.actresses.map((a) => (
      <Grid
         item
         key={a.id}
         style={{
            display: visibleActressesId.includes(a.id) ? "unset" : "none",
         }}
      >
         <Actress actress={a} dispatch={dispatch} />
      </Grid>
   ));
};

const ActressesList = ({ state, dispatch }: Props): JSX.Element | null => {
   const hasMounted = useHasMounted();
   if (!hasMounted) {
      return null;
   }
   const list = createList({ state, dispatch });
   return (
      <Grid container spacing={1}>
         {list}
      </Grid>
   );
};
export default React.memo(ActressesList);
