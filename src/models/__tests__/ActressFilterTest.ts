import actressFilter from "../ActressFilter";
import { ActressType } from "../DataTypes";

const yotuyuData = {
   id: "c296567d-dadf-5f9e-818d-e46f304cad24",
   name: "比良坂 夜露",
   attribute: "electric",
   isSelect: true,
} as const;
const fumikaData = {
   id: "8bed052f-fa26-5cf7-914e-64483f5f6862",
   name: "百科 文嘉",
   attribute: "freeze",
   isSelect: true,
} as const;
const sitaraData = {
   id: "64d1dd5e-a7f5-57fa-9eae-0b49f428d3bd",
   name: "兼志谷 シタラ",
   attribute: "gravity",
   isSelect: true,
} as const;
const rinData = {
   id: "90be9da8-126e-52d6-9194-0954eab0fe63",
   name: "日向 リン",
   attribute: "heat",
   isSelect: true,
} as const;
const testData: readonly ActressType[] = [
   yotuyuData,
   fumikaData,
   sitaraData,
   rinData,
] as const;
describe("アクトレス属性フィルター", () => {
   it("フィルターなし", () => {
      const attributeFilter = {
         enable: false,
         electric: false,
         freeze: false,
         gravity: false,
         heat: false,
      };
      expect(
         actressFilter({ actresses: testData, attributeFilter }),
      ).toHaveLength(4);
   });
   it("選択なし", () => {
      const attributeFilter = {
         enable: true,
         electric: false,
         freeze: false,
         gravity: false,
         heat: false,
      };
      expect(
         actressFilter({ actresses: testData, attributeFilter }),
      ).toHaveLength(0);
   });
   it("電撃のみ", () => {
      const attributeFilter = {
         enable: true,
         electric: true,
         freeze: false,
         gravity: false,
         heat: false,
      };
      expect(
         actressFilter({ actresses: testData, attributeFilter }),
      ).toStrictEqual([yotuyuData]);
   });
   it("冷撃のみ", () => {
      const attributeFilter = {
         enable: true,
         electric: false,
         freeze: true,
         gravity: false,
         heat: false,
      };
      expect(
         actressFilter({ actresses: testData, attributeFilter }),
      ).toStrictEqual([fumikaData]);
   });
   it("重力のみ", () => {
      const attributeFilter = {
         enable: true,
         electric: false,
         freeze: false,
         gravity: true,
         heat: false,
      };
      expect(
         actressFilter({ actresses: testData, attributeFilter }),
      ).toStrictEqual([sitaraData]);
   });
   it("焼夷のみ", () => {
      const attributeFilter = {
         enable: true,
         electric: false,
         freeze: false,
         gravity: false,
         heat: true,
      };
      expect(
         actressFilter({ actresses: testData, attributeFilter }),
      ).toStrictEqual([rinData]);
   });
   it("電撃＋重力", () => {
      const attributeFilter = {
         enable: true,
         electric: true,
         freeze: false,
         gravity: true,
         heat: false,
      };
      expect(
         actressFilter({ actresses: testData, attributeFilter }),
      ).toStrictEqual([yotuyuData, sitaraData]);
   });
   it("氷結＋焼夷", () => {
      const attributeFilter = {
         enable: true,
         electric: false,
         freeze: true,
         gravity: false,
         heat: true,
      };
      expect(
         actressFilter({ actresses: testData, attributeFilter }),
      ).toStrictEqual([fumikaData, rinData]);
   });
   it("氷結+重力＋焼夷", () => {
      const attributeFilter = {
         enable: true,
         electric: false,
         freeze: true,
         gravity: true,
         heat: true,
      };
      expect(
         actressFilter({ actresses: testData, attributeFilter }),
      ).toStrictEqual([fumikaData, sitaraData, rinData]);
   });
   it("電撃＋氷結＋重力＋焼夷", () => {
      const attributeFilter = {
         enable: true,
         electric: true,
         freeze: true,
         gravity: true,
         heat: true,
      };
      expect(
         actressFilter({ actresses: testData, attributeFilter }),
      ).toStrictEqual([yotuyuData, fumikaData, sitaraData, rinData]);
   });
});
