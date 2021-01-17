import { db } from "./db";

export async function populate() {
  const recipe1 = await db.recipes.add({
    recipeName: "Sushi",
  });
  console.log(recipe1);
  await db.products.bulkAdd([
    {
      recipeId: recipe1,
      name: "tuńczyk",
      weight: 10,
      calories: 100,
      weightSymbol: "g",
    },
    {
      recipeId: recipe1,
      name: "ryz",
      weight: 100,
      calories: 300,
      weightSymbol: "g",
    },
  ]);

  const recipe2 = await db.recipes.add({
    recipeName: "Ramen",
  });
  await db.products.bulkAdd([
    {
      recipeId: recipe2,
      name: "bulion",
      weight: 10,
      calories: 100,
      weightSymbol: "g",
    },
    {
      recipeId: recipe2,
      name: "jajko",
      weight: 50,
      calories: 150,
      weightSymbol: "g",
    },
  ]);
}
