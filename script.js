//your JS code here. If required.
const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
  square.addEventListener("mouseenter", function () {
    squares.forEach((sq) => {
      sq.style.backgroundColor = "#6F4E37";
    });
    this.style.backgroundColor = "#E6E6FA";
  });
  square.addEventListener("mouseleave", function () {
    squares.forEach((sq) => {
      sq.style.backgroundColor = "#E6E6FA";
    });
  });
});
