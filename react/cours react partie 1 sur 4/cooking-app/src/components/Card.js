import React from "react";

const Card = ({ meal }) => {
  if (!meal) {
    return <h2>Aucun résultat</h2>;
  }

  let ingredients = [];

  for (let i = 1; i < 21; i++) {
    if (meal[`strIngredient${i}`]) {
      let ingredient = meal[`strIngredient${i}`];
      let measure = meal[`strMeasure${i}`];

      ingredients.push(
        <li key={`ingredient-${i}`}>
          {ingredient} - {measure}
        </li>
      );
    }
  }

  return (
    <div className="card">
      <h2>{meal.strMeal}</h2>
      <p>{meal.strArea}</p>
      <img src={meal.strMealThumb} alt={`${meal.strMeal}`} />
      <h3>Ingrédients:</h3>
      <ul>{ingredients}</ul>
    </div>
  );
};

export default Card;
