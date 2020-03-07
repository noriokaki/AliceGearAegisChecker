// eslint-disable-next-line prettier/prettier
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from "@material-ui/core";
import { blue, orange, purple, red } from "@material-ui/core/colors";
import React from "react";
import { BorderColor } from "./palette";

const FilterBlock = (): JSX.Element => {
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
               control={<Checkbox />}
               label="属性"
               style={{ color: "rgba(0, 0, 0, 0.54)" }}
            />
         </FormLabel>

         <FormGroup row={true}>
            <FormControlLabel
               control={<Checkbox style={{ color: orange[400] }} />}
               label="電撃"
            />
            <FormControlLabel
               control={<Checkbox style={{ color: purple[400] }} />}
               label="重力"
            />
            <FormControlLabel
               control={<Checkbox style={{ color: red[400] }} />}
               label="焼夷"
            />
            <FormControlLabel
               control={<Checkbox style={{ color: blue[400] }} />}
               label="冷撃"
            />
         </FormGroup>
      </FormControl>
   );
};

export default FilterBlock;
