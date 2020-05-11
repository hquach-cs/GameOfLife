var grid_width = 15;
var grid_height = 15;
var canvas;
var context;
var grid;
var size = 40;

$(document).ready(function () {
  canvas = document.getElementById("grid");
  context = canvas.getContext("2d");
  canvas.width = grid_width * size;
  canvas.height = grid_height * size;
  initGrid();
  drawGrid();
});

function initGrid() {
  grid = new Array(grid_height);
  for (i = 0; i < grid_height; i++) {
    grid[i] = new Array(grid_width);
  }
  grid[0][0] = true;
}

function drawGrid() {
  for (i = 0; i < grid_height; i++) {
    for (j = 0; j < grid_width; j++) {
      context.beginPath();
      if (grid[i][j] === true) {
        context.fillStyle = "#000000";
      } else {
        context.fillStyle = "#FFFFFF";
      }
      context.fillRect(j * size, i * size, size, size);

      context.rect(j * size, i * size, size, size);

      context.stroke();
    }
  }
}
