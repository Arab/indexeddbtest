import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../db/db";
import AddProduct from "./AddProduct";

import Product from "./Product";

const Recipe = ({ recipe }) => {
  const products = useLiveQuery(
    () => db.products.where({ recipeId: recipe.id }).toArray(),
    [recipe.id]
  );

  return (
    <div>
      <header>
        <span>{recipe.recipeName} </span>
        <span>
          {products &&
            products.length > 0 &&
            products.map((a) => a.calories).reduce((a, b) => a + b)}
        </span>
        <span> kCal</span>
      </header>
      <ul>
        {products &&
          products.length > 0 &&
          products.map((product) => (
            <li key={product.name}>
              <Product {...product} />
            </li>
          ))}
      </ul>
      <AddProduct recipe={recipe} />
    </div>
  );
};
export default Recipe;
