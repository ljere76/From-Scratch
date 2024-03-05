import { useEffect } from "react";

const Mouse = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    document.addEventListener("mousemove", (e) => {
      cursor.setAttribute(
        "style",
        "top: " + e.pageY + "px; left: " + e.pageX + "px;"
      );
    });
    document.querySelectorAll(".hover").forEach((link) => {
      link.addEventListener("mouseover", () => {
        cursor.classList.add("hovered");
      });
      link.addEventListener("mouseleave", () => {
        cursor.classList.remove("hovered");
      });
    });
  }, []);

  return <span className="cursor"></span>;
};

export default Mouse;
