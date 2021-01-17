import { useLiveQuery } from "dexie-react-hooks";
import { db, resetDatabase } from "./db/db";

import Recipe from "./Components/Recipe";
import AddRecipe from "./Components/AddRecipe";

import "./App.css";

function App() {
  const recipes = useLiveQuery(() => db.recipes.toArray());

  return (
    <div className="App">
      {recipes ? (
        recipes.map((recipe) => <Recipe key={recipe.id} recipe={recipe} />)
      ) : (
        <div>No Recipes add some</div>
      )}
      <AddRecipe />
      <button
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
