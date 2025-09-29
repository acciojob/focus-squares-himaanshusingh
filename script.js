//your JS code here. If required.
const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
  square.addEventListener("mouseenter", function () {
    squares.forEach((sq) => {
      sq.style.backgroundColor = "#6F4E37";
    });
    this.style.backgroundColor = "#rgb(111, 78, 55)";
  });
  square.addEventListener("mouseleave", function () {
    squares.forEach((sq) => {
      sq.style.backgroundColor = "#rgb(111, 78, 55)";
    });
  });
});
