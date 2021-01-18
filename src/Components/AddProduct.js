import React, { useState } from "react";
import { db } from "../db/db";

const AddProduct = ({ recipe }) => {
  const [product, setProduct] = useState({
    recipeId: recipe.id,
    name: "",
    weight: 0,
    weightSymbol: "g",
    calories: 0,
  });

  function onSubmit(event) {
    db.products.add(product);
    event.preventDefault();
    setProduct({
      recipeId: recipe.id,
      name: "",
      weight: 0,
      weightSymbol: "g",
      calories: 0,
    });
  }

  return (
    <div>
      <h3>Add new product</h3>
      <form onSubmit={onSubmit}>
        <label>
          Name:
          <input
            type="text"
            autoFocus
            placeholder="Enter name..."
            value={product.name}
            onChange={(e) =>
              setProduct((product) => ({
                ...product,
                name: e.target.value,
              }))
            }
          />
        </label>

        <label>
          Weight:
          <input
            type="number"
            value={product.weight}
            onChange={(e) =>
              setProduct((product) => ({
                ...product,
                weight: parseInt(e.target.value, 10),
              }))
            }
          />
        </label>

        <label>
          Weight Symbol:
          <select
            placeholder="Enter weight symbol..."
            autoFocus
            value={product.weightSymbol}
            onChange={(e) =>
              setProduct((product) => ({
                ...product,
                weightSymbol: e.target.value,
              }))
            }
          >
            <option value="g">g</option>
            <option value="mg">mg</option>
            <option value="dag">dag</option>
            <option value="kg">kg</option>
          </select>
        </label>

        <label>
          Calories:
          <input
            type="number"
            value={product.calories}
            onChange={(e) =>
              setProduct((product) => ({
                ...product,
                calories: parseInt(e.target.value, 10),
              }))
            }
          />
        </label>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
