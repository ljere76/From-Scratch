// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.

// 3 - Passer les données à une variable

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
// coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays

const inputSearch = document.getElementById("inputSearch");
const inputRange = document.getElementById("inputRange");
const rangeValue = document.getElementById("rangeValue");
const result = document.querySelector(".countries-container");
let countries = [];

async function fetchCountry() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    countries = data;
    countriesDisplay(); // Appel à countriesDisplay une fois les données chargées
  } catch (error) {
    console.log(error);
  }
}

inputSearch.addEventListener("input", countriesDisplay); // Écouteur d'événement pour détecter les changements dans l'input
inputRange.addEventListener("input", countriesDisplay); // Écouteur d'événement pour détecter les changements dans inputRange

async function countriesDisplay() {
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(inputSearch.value.toLowerCase())
  );

  const numCountries = parseInt(inputRange.value); // Nombre de pays à afficher
  rangeValue.textContent = numCountries; // Met à jour le texte de l'élément span avec le nombre de pays affichés

  const displayedCountries = filteredCountries.slice(0, numCountries); // Utilisation de la méthode slice() pour obtenir le nombre de pays spécifié

  result.innerHTML = displayedCountries
    .map(
      (country) =>
        `<div class="country-card">
            <img class="country-flag" src="${country.flags.svg}" alt="Drapeau de ${country.name.common}">
            <div class="country-info">
              <h2>${country.translations.fra.common}</h2>
              <p><strong>Capitale:</strong> ${country.capital}</p>
              <p><strong>Population:</strong> ${country.population}</p>
            </div>
         </div>`
    )
    .join("");
}

fetchCountry(); // Appel initial à fetchCountry pour charger les données

// Ajout d'écouteurs d'événements pour les boutons de tri
document.getElementById("minToMax").addEventListener("click", () => {
  countries.sort((a, b) => a.population - b.population);
  countriesDisplay();
});

document.getElementById("maxToMin").addEventListener("click", () => {
  countries.sort((a, b) => b.population - a.population);
  countriesDisplay();
});

document.getElementById("alpha").addEventListener("click", () => {
  countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
  countriesDisplay();
});
