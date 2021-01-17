import React, { useState } from "react";
import { db } from "../db/db";

const AddRecipe = () => {
  const [recipe, setRecipe] = useState({
    recipeName: "",
  });

  function onSubmit(event) {
    db.recipes.add(recipe);
    event.preventDefault();
    setRecipe({
      recipeName: "",
    });
  }

  return (
    <div>
      <h3>Add new recipe</h3>
      <form onSubmit={onSubmit}>
        <label>
          Name:
          <input
            type="text"
            autoFocus
            placeholder="Enter name..."
            value={recipe.recipeName}
            onChange={(e) =>
              setRecipe({
                recipeName: e.target.value,
              })
            }
          />
        </label>

        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;
