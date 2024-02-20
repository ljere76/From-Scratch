// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

let previousScroll = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll > previousScroll) {
    navbar.style.height = "45px";
  } else {
    navbar.style.height = "90px";
  }

  previousScroll = currentScroll;
});

let middleScroll = 250;

window.addEventListener("scroll", () => {
  const improviseScroll = window.scrollY;

  if (improviseScroll > middleScroll) {
    imgImprovise.style.opacity = "1";
    imgImprovise.style.transform = "translateX(0px)";
  }
});

const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");

let bottomScroll = 1000;

window.addEventListener("scroll", () => {
  const popupScroll = window.scrollY;

  if (popupScroll > bottomScroll) {
    popup.style.opacity = "1";
    popup.style.transform = "translateX(0px)";
  }
});

if (
  closeBtn.addEventListener("click", () => {
    popup.style.opacity = "0";
    popup.style.transform = "translateX(400px)";
    popup.style.display = "none";
  })
);
