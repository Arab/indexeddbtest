import { db } from "./db";
import { useLiveQuery } from "dexie-react-hooks";

const useSortedRecipes = () => {
  const recipes = useLiveQuery(() => db.recipes.toArray());
  const products = useLiveQuery(() => db.products.toArray());

  if (!recipes || !products) return [undefined];
  const sortedRecipes = recipes
    .map((recipe) => {
      const recipeProducts = products.filter(
        (prod) => prod.recipeId === recipe.id
      );
      const recipeCalories =
        (recipeProducts.length > 0 &&
          recipeProducts
            .map((prod) => prod.calories)
            .reduce((a, b) => a + b)) ||
        0;
      return { ...recipe, recipeCalories };
    })
    .sort((a, b) => a.recipeCalories - b.recipeCalories);

  return [sortedRecipes];
};
export default useSortedRecipes;
