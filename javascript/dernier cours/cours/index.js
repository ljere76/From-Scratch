// canvas

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// draw

ctx.fillStyle = "red";
ctx.fillRect(10, 10, 50, 50);

ctx.fillStyle = "rgba(0, 100, 200, 0.5)";
ctx.fillRect(30, 30, 50, 50);
