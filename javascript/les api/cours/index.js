// XMLHttprequest

// function reqListener() {
//   console.log(this.responseText);
// }

// let req = new XMLHttpRequest();
// req.onload = reqListener;
// req.open("GET", "https://api.blablagues.net/?rub=blagues", true);
// req.send();

// fetch

// fetch("https://api.blablagues.net/?rub=blagues")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

// fetch("animeList.json")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

const init = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "John",
    age: 30,
    city: "New York",
  }),
  mode: "cors",
  credentials: "same-origin",
};

document.querySelector("form").addEventListener("submit", () => {
  fetch("http://localhost:3000/posts", init).then(() =>
    console.log("data envoyée")
  );
});
