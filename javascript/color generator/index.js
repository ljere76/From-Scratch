// créer 3 variables pour stocker 3 chiffres aléatoires

// donner au body une couleur de fond en rgb()

//fonction pour changer la couleur tous les 2 secondes
function changeColor() {
  setInterval(function () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    document.querySelector("h1").innerHTML = `rgb(${r},${g},${b})`;
  }, 2000);
}

changeColor();
