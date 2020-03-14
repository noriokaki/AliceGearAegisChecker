// eslint-disable-next-line prettier/prettier
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from "@material-ui/core";
import { blue, orange, purple, red } from "@material-ui/core/colors";
import React, { Dispatch, useState } from "react";
// eslint-disable-next-line prettier/prettier
import { ActionType, toggleAttributeFilter, updateAttributeFilter } from "../models/ActionCreator";
import { StateType } from "../models/DataTypes";
import { BorderColor } from "./palette";

type Props = Pick<StateType, "attributeFilter"> & {
   dispatch: Dispatch<ActionType>;
};
const FilterBlock = ({ attributeFilter, dispatch }: Props): JSX.Element => {
   const [isDisable, setDisable] = useState(false);
   return (
      <FormControl
         component="fieldset"
         style={{
            border: `2px solid ${BorderColor}`,
            borderRadius: "5px",
         }}
      >
         <FormLabel component="legend" style={{ marginLeft: "0.5em" }}>
            <FormControlLabel
               control={
                  <Checkbox
                     checked={attributeFilter.enable}
                     onChange={(): void => {
                        setDisable((current) => !current);
                        dispatch(toggleAttributeFilter());
                     }}
                  />
               }
               label="属性"
               style={{ color: "rgba(0, 0, 0, 0.54)" }}
            />
         </FormLabel>

         <FormGroup row={true}>
            <FormControlLabel
               control={
                  <Checkbox
                     disabled={isDisable}
                     checked={attributeFilter.electric}
                     style={{ color: orange[400] }}
                     onChange={(): void =>
                        dispatch(
                           updateAttributeFilter({
                              ...attributeFilter,
                              electric: !attributeFilter.electric,
                           }),
                        )
                     }
                  />
               }
               label="電撃"
            />
            <FormControlLabel
               control={
                  <Checkbox
                     disabled={isDisable}
                     checked={attributeFilter.gravity}
                     style={{ color: purple[400] }}
                     onChange={(): void =>
                        dispatch(
                           updateAttributeFilter({
                              ...attributeFilter,
                              gravity: !attributeFilter.gravity,
                           }),
                        )
                     }
                  />
               }
               label="重力"
            />
            <FormControlLabel
               control={
                  <Checkbox
                     disabled={isDisable}
                     checked={attributeFilter.heat}
                     style={{ color: red[400] }}
                     onChange={(): void =>
                        dispatch(
                           updateAttributeFilter({
                              ...attributeFilter,
                              heat: !attributeFilter.heat,
                           }),
                        )
                     }
                  />
               }
               label="焼夷"
            />
            <FormControlLabel
               control={
                  <Checkbox
                     disabled={isDisable}
                     checked={attributeFilter.freeze}
                     style={{ color: blue[400] }}
                     onChange={(): void =>
                        dispatch(
                           updateAttributeFilter({
                              ...attributeFilter,
                              freeze: !attributeFilter.freeze,
                           }),
                        )
                     }
                  />
               }
               label="冷撃"
            />
         </FormGroup>
      </FormControl>
   );
};

export default React.memo(FilterBlock);
