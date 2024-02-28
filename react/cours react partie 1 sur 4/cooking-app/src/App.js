import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";

const Apps = () => {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        );
        if (response.data.meals) {
          setMeals(response.data.meals);
        } else {
          setMeals([]); // Si aucun repas n'est trouvé, mettre meals à une liste vide
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchMeals();
  }, [search]);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <h1>React Cook</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Entrez le nom d'un aliment (en anglais)"
          value={search}
          onChange={handleInputChange}
        />
      </form>
      <div className="card-container">
        {meals.map((meal) => (
          <Card key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Apps;
