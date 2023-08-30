export type StateType = {
   actresses: readonly ActressType[];
   attributeFilter: {
      readonly enable: boolean;
      electric: boolean;
      gravity: boolean;
      freeze: boolean;
      heat: boolean;
   };
   kindFilter: {
      normal: boolean;
      another: boolean;
      factor: boolean;
      main: boolean;
      collaboration: boolean;
   };
};

export type ActressType = Readonly<BasicActressType & Partial<AnotherType | FactorType>>;
type BasicActressType = {
   id: string;
   name: string;
   attribute: AttributeType;
   shortName?: string;
   collaboration?: true;
   isSelect: boolean;
   imagePath?: string;
};
type AnotherType = { another: string; factor: undefined; };
type FactorType = { factor: string; another: undefined; };

export type AttributeType = "electric" | "gravity" | "freeze" | "heat";
