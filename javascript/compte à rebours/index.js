// Créer la logique de compte à rebours
// Créer un événement à la validation du form pour lancer le compte à rebours

// choice.value = 5 minutes
// choice.value * 60 = totalSeconds

// let minutes = Math.floor(totalSeconds / 60);
// let seconds = totalSeconds % 60

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const countdownDisplay = document.getElementById("countdownDisplay");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Pour éviter le rechargement de la page
    const minutes = parseInt(document.getElementById("choice").value);
    const seconds = minutes * 60; // Conversion des minutes en secondes
    choice.value = "";
    startCountdown(seconds);
  });

  function startCountdown(seconds) {
    let totalSeconds = seconds;

    const interval = setInterval(function () {
      if (totalSeconds <= 0) {
        clearInterval(interval);
        countdownDisplay.innerHTML = "Le compte à rebours est terminé !";
      } else {
        const minutes = Math.floor(totalSeconds / 60);
        const remainingSeconds = totalSeconds % 60;
        countdownDisplay.innerHTML = `${minutes}:${
          remainingSeconds < 10 ? "0" : ""
        }${remainingSeconds}`;
        totalSeconds--;
      }
    }, 1000); // 1000 ms = 1 seconde
  }
});
