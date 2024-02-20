// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)
// mouse events

const customCursor = document.getElementById("custom-cursor");

document.addEventListener("mousemove", (e) => {
  customCursor.style.left = e.pageX + "px";
  customCursor.style.top = e.pageY + "px";
});

const circles = document.querySelectorAll(".circle");

window.addEventListener("mousemove", (e) => {
  circles.forEach((circle) => {
    circle.style.left = e.pageX + "px";
    circle.style.top = e.pageY + "px";
  });
});
