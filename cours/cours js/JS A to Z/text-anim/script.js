const target = document.getElementById("target");
let array = ["Debutant", "Confirme", "Expert"];
let wordindex = 0;
let letterindex = 0;

const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);

  letter.textContent = array[wordindex][letterindex];
  setTimeout(() => {
    letter.remove();
  }, 2800);
};

const loop = () => {
  setTimeout(() => {
    if (wordindex >= array.length) {
      wordindex = 0;
    }
    if (letterindex < array[wordindex].length) {
      createLetter();
      letterindex++;
      loop();
    } else {
      wordindex++;
      letterindex = 0;
      setTimeout(() => {
        loop();
      }, 2800);
    }
  }, 60);
};

loop();
