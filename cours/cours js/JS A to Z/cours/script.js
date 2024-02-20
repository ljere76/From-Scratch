data = [
  {
    pseudo: "John",
    age: 30,
  },
  {
    pseudo: "Jane",
    age: 25,
  },
  {
    pseudo: "Bob",
    age: 40,
  },
  {
    pseudo: "Alice",
    age: 35,
  },
  {
    pseudo: "Charlie",
    age: 20,
  },
];

// la boucle for methode 1
// for (const user of data) {
//   document.body.innerHTML += "<p>" + user.pseudo + "</p>";
// }

// la boucle for methode 2
for (i = 0; i < data.length; i++) {
  document.body.innerHTML +=
    "<h2 id=" + data[i].pseudo + ">" + data[i].pseudo + "</h2>";
}

// switch
document.body.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "John":
      document.body.style.background = "red";
      break;
    case "Jane":
      document.body.style.background = "yellow";
      break;
    case "Bob":
      document.body.style.background = "green";
      break;
    case "Alice":
      document.body.style.background = "pink";
      break;
    case "Charlie":
      document.body.style.background = "blue";
      break;
    default:
      null;
  }
});
