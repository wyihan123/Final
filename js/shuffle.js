const button = document.querySelector(".shuffle");
const grid = document.querySelector(".gallery");

if (button && grid) {
  button.addEventListener("click", () => {
    for (var i = grid.children.length; i >= 0; i--) {
        grid.appendChild(grid.children[Math.random() * i | 0]);
    }
  });
}