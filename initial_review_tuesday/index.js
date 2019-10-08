// const button = document.getElementById("btn1");

let numberOfSquares = 0;

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");
  const button = document.getElementById("button");

  button.addEventListener("click", () => {
    numberOfSquares++;
    const square = document.createElement("div");
    square.className = "box";

    const squareNumber = document.createElement("p");
    squareNumber.innerText = numberOfSquares;
    square.appendChild(squareNumber);
    squareNumber.style.display = "none";

    square.addEventListener("mouseover", () => {
      squareNumber.style.display = "initial";
    });

    square.addEventListener("mouseout", () => {
      squareNumber.style.display = "none";
    });

    square.addEventListener("click", e => {
      const currentBgColor = e.target.style.backgroundColor;

      // console.log(currentBgColor);
    });
    container.appendChild(square);
    square.style.backgroundColor = getRandomColor();
  });
});

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
