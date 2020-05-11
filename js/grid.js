function initGrid(grid_height, grid_width) {
  var grid = new Array(grid_height);
  for (i = 0; i < grid_height; i++) {
    grid[i] = new Array(grid_width);
  }
  return grid;
}

function drawGrid(grid, context, grid_height, grid_width) {
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
