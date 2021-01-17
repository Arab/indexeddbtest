import Dexie from "dexie";
import { populate } from "./populate";

export class TodoDB extends Dexie {
  constructor() {
    super("RecipesDB");
    this.version(1).stores({
      recipes: "++id",
      products: "++id, recipeId",
    });
  }
}

export const db = new TodoDB();

db.on("populate", populate);

export function resetDatabase() {
  return db.transaction("rw", db.recipes, db.products, async () => {
    await Promise.all(db.tables.map((table) => table.clear()));
    await populate();
  });
}
