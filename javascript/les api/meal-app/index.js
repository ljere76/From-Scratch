const result = document.getElementById("result");
const form = document.querySelector("form");
const input = document.querySelector("input");
let meals = [];

async function fetchMeals(search) {
  await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search)
    .then((response) => response.json())
    .then((data) => (meals = data.meals))
    .catch((error) => {
      console.log(error);
    });
  console.log(meals);
}

function mealsDisplay() {
  meals.length = 12;
  result.innerHTML = meals
    .map(
      (meal) =>
        `
        <li class="card">
            <h2>${meal.strMeal}</h2>
            <p>${meal.strArea}</p>
            <img src="${meal.strMealThumb} alt="photo de ${meal.strMeal}">
            <ul></ul>
        </li>
        `
    )
    .join("");
}

input.addEventListener("input", (event) => {
  fetchMeals(event.target.value);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const search = document.querySelector("input").value;
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      result.innerHTML = data.meals
        .map(
          (meal) =>
            `
        <h2>${meal.strMeal}</h2>
        <img src="${meal.strMealThumb}">
        <p>${meal.strInstructions}</p>
        `
        )
        .join("");
    })
    .catch((error) => {
      console.log(error);
    });
});
fetchMeals();
