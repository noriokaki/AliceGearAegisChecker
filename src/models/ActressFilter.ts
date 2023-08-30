import { StateType } from "./DataTypes";

const actressFilter = (state: StateType): StateType["actresses"] => {
   if (!state.attributeFilter.enable) {
      return state.actresses;
   }

   return state.actresses
      .filter((actress) => {

         if (
            actress.attribute === "electric" &&
            state.attributeFilter.electric
         ) {
            return true;
         }
         if (actress.attribute === "freeze" && state.attributeFilter.freeze) {
            return true;
         }
         if (actress.attribute === "gravity" && state.attributeFilter.gravity) {
            return true;
         }
         if (actress.attribute === "heat" && state.attributeFilter.heat) {
            return true;
         }
         return false;
      })
      .filter((actress) => {
         if (actress.collaboration === undefined &&
            state.kindFilter.main === false
         ) {
            return false;
         }
         if (
            actress?.collaboration == true &&
            state.kindFilter.collaboration == false
         ) {
            return false;
         }
         if (actress.another == null && actress.factor == null && state.kindFilter.normal) {
            return true;
         }
         if (actress.another != null && state.kindFilter.another) {
            return true;
         }
         if (actress.factor != null && state.kindFilter.factor) {
            return true;
         }

         return false;
      });
};
export default actressFilter;
