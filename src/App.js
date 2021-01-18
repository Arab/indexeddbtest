import { resetDatabase } from "./db/db";
import useSortedRecipes from "./db/useSortedRecipes";

import Recipe from "./Components/Recipe";
import AddRecipe from "./Components/AddRecipe";

import "./App.css";

function App() {
  const [sortedRecipes] = useSortedRecipes();

  return (
    <div className="recipes">
      {sortedRecipes ? (
        sortedRecipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))
      ) : (
        <div className="recipes--empty">No Recipes add some</div>
      )}
      <AddRecipe />
      <button
        className="reset-database"
        onClick={() => {
          resetDatabase();
        }}
      >
        Reset Database
      </button>
    </div>
  );
}

export default App;
