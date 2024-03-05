import { useEffect } from "react";

const DynamicText = () => {
  useEffect(() => {
    const target = document.querySelector("#text-target");
    let array = ["simple", "clear", "smart", "strong"];
    let wordindex = 0;
    let letterindex = 0;

    const createLetter = () => {
      const letter = document.createElement("span");
      target.appendChild(letter);

      letter.classList.add("letter");
      letter.style.opacity = "0";
      letter.style.animation = "anim 5s ease forwards";
      letter.textContent = array[wordindex][letterindex];

      setTimeout(() => {
        letter.remove();
      }, 2000);
    };

    const loop = () => {
      setTimeout(() => {
        if (wordindex >= array.length) {
          wordindex = 0;
          letterindex = 0;
          loop();
        } else if (letterindex < array[wordindex].length) {
          createLetter();
          letterindex++;
          loop();
        } else {
          letterindex = 0;
          wordindex++;
          setTimeout(() => {
            loop();
          }, 2800);
        }
      }, 80);
    };
    loop();
  }, []);

  return (
    <span className="dynamic-text">
      <span>simply</span>
      <span id="text-target"></span>
    </span>
  );
};
export default DynamicText;
