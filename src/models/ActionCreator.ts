import { AttributeType, StateType } from "./DataTypes";

export type ActionType =
   | SelectActionType
   | UnselectActionType
   | UpdateAttributeFilter
   | UpdateKindFilter
   | ToggleAttributeFilter;

export enum Action {
   "select",
   "unSelect",
   "updateAttributeFilter",
   "toggleAttributeFilter",
   "updateKindFilter",
}
export type SelectActionType = { type: Action.select; id: string };
export type UnselectActionType = { type: Action.unSelect; id: string };

export type UpdateAttributeFilter = {
   type: Action.updateAttributeFilter;
   select: Record<AttributeType, boolean>;
};
export type ToggleAttributeFilter = { type: Action.toggleAttributeFilter };

export const updateAttributeFilter = (
   select: Record<AttributeType, boolean>,
): UpdateAttributeFilter => {
   return { type: Action.updateAttributeFilter, select };
};
export type UpdateKindFilter = {
   type: Action.updateKindFilter;
   select: StateType["kindFilter"];
};
export const updateKindFilter = (
   select: StateType["kindFilter"],
): UpdateKindFilter => {
   return { type: Action.updateKindFilter, select };
};
export const toggleAttributeFilter = (): ToggleAttributeFilter => {
   return { type: Action.toggleAttributeFilter };
};

export const select = (id: string): SelectActionType => {
   return { type: Action.select, id };
};

export const unselect = (id: string): UnselectActionType => {
   return { type: Action.unSelect, id };
};
