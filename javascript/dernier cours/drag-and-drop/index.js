let item;

document.addEventListener("dragstart", (event) => {
  item = event.target;
});

document.addEventListener("dragover", (event) => {
  event.preventDefault();
});

document.addEventListener("drop", (event) => {
  if (event.target.getAttribute("data-draggable") == "target") {
    event.preventDefault();
    event.target.appendChild(item);
  }
});

document.addEventListener("dragend", (event) => {
  item = null;
});
