import { Reducer } from "react";
import { db } from "../components/Storage";
import { Action, ActionType } from "./ActionCreator";
import { StateType } from "./DataTypes";

function assertNever(value: never): never {
   throw new Error(`${value} is Never type`);
}

const reducer: Reducer<StateType, ActionType> = (
   state: StateType,
   action: ActionType,
): StateType => {
   switch (action.type) {
      case Action.select:
         return {
            ...state,
            actresses: state.actresses.map((v) => {
               if (v.id !== action.id) {
                  return v;
               }
               db.actress.put({ id: v.id, isSelect: true });
               return { ...v, isSelect: true };
            }),
         };

      case Action.unSelect:
         return {
            ...state,
            actresses: state.actresses.map((v) => {
               if (v.id !== action.id) {
                  return v;
               }
               db.actress.put({ id: v.id, isSelect: false });
               return { ...v, isSelect: false };
            }),
         };

      case Action.toggleAttributeFilter:
         return {
            ...state,

            attributeFilter: {
               ...state.attributeFilter,
               enable: !state.attributeFilter.enable,
            },
         };
      case Action.updateAttributeFilter:
         return {
            ...state,
            attributeFilter: {
               ...state.attributeFilter,
               ...action.select,
            },
         };
      default:
         assertNever(action);
   }
};

export default reducer;
