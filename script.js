// your JS code here. If required.
const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
  square.addEventListener("mouseover", (evt) => {
    squares.forEach((square) => {
      square.style.backgroundColor = "#6F4E37";
    });
    square.style.backgroundColor = "#e6e6fa";
  });
  square.addEventListener("mouseout", (evt) => {
    squares.forEach((square) => {
      square.style.backgroundColor = "#e6e6fa";
    });
  });
});
