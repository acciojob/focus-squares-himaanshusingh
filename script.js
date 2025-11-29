const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
  square.addEventListener("mouseover", () => {
    squares.forEach((square) => square.classList.add("coffee"));
    square.classList.remove("coffee");
  });
  square.addEventListener("mouseout", () => {
    squares.forEach((square) => square.classList.remove("coffee"));
  });
});
