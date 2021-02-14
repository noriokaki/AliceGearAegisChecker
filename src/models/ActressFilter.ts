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
         if (
            actress?.collaboration == true &&
            state.kindFilter.collaboration == false
         ) {
            return false;
         }
         if (actress?.another == null && state.kindFilter.normal) {
            return true;
         }
         if (actress?.another != null && state.kindFilter.another) {
            return true;
         }

         return false;
      });
};
export default actressFilter;
