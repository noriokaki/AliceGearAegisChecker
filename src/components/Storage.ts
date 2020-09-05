import Dexie from "dexie";

/**
 * IndexDB保存用
 */
class Storage extends Dexie {
   actress: Dexie.Table<ActressStorage, string>;
   constructor() {
      super("storage");
      this.version(1).stores({
         actress: "id,isSelect",
      });
      this.actress = this.table("actress");
   }
}

interface ActressStorage {
   id: string;
   isSelect: boolean;
}

export const db = new Storage();
