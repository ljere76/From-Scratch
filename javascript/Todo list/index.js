document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const ul = document.querySelector("ul");

  // Récupérer les todos du localStorage au chargement de la page
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  ul.innerHTML = todos.map((todo) => `<li>${todo}</li>`).join("");

  // Ajouter un todo au DOM et au localStorage
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const todoInput = document.querySelector("#todo");
    const todoText = todoInput.value.trim();
    if (todoText !== "") {
      ul.innerHTML += `<li>${todoText}</li>`;
      todos.push(todoText);
      localStorage.setItem("todos", JSON.stringify(todos));
      todoInput.value = "";
    }
  });

  // Supprimer un todo du DOM et du localStorage
  ul.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      event.target.remove();
      let removedTodo = event.target.textContent;
      todos = todos.filter((todo) => todo !== removedTodo);
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  });
});
