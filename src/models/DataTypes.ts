export type StateType = {
   actresses: readonly ActressType[];
   attributeFilter: {
      readonly enable: boolean;
      electric: boolean;
      gravity: boolean;
      freeze: boolean;
      heat: boolean;
   };
};

export type ActressType = Readonly<{
   id: string;
   name: string;
   shortName?: string;
   attribute: AttributeType;
   another?: string;
   isSelect: boolean;
   imagePath?: string;
}>;
export type AttributeType = "electric" | "gravity" | "freeze" | "heat";
