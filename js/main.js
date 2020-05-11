// Any live cell with two or three live neighbours survives.
// Any dead cell with three live neighbours becomes a live cell.
// All other live cells die in the next generation. Similarly, all other dead cells stay dead.

var grid_width = 20;
var grid_height = 20;
var canvas;
var context;
var grid;
var size = 20;
var seed = 1;
var initChance = 0.5;
var done = false;

$(document).ready(function () {
  canvas = document.getElementById("grid");
  context = canvas.getContext("2d");
  canvas.width = grid_width * size;
  canvas.height = grid_height * size;
  grid = initGrid(grid_height, grid_width);
  initGOL(grid, seed, initChance);
  drawGrid(grid, context, grid_height, grid_width);
  GameOfLife(grid);
});

function GameOfLife() {
  var initPop = [];
  for (i = 0; i < grid.length; i++) {
    for (j = 0; j < grid[i].length; j++) {
      if (grid[i][j]) {
        initPop.push({ i: i, j: j });
      }
    }
  }
  var alive = checkPopulation(initPop);
  for (i = 0; i < grid.length; i++) {
    for (j = 0; j < grid[i].length; j++) {
      if (grid[i][j]) {
        grid[i][j] = false;
      }
    }
  }
  for (i = 0; i < alive.length; i++) {
    grid[alive[i].i][alive[i].j] = true;
  }
  if (alive.length === 0) done = true;
  drawGrid(grid, context, grid_height, grid_width);
  console.log("Running");
  if (!done) setTimeout(GameOfLife, 5000);
}

function checkPopulation(population) {
  var deadCells = [];
  var stayAlive = [];
  population.forEach(function (cell) {
    var neighbor = 0;
    for (i = cell.i - 1; i <= cell.i + 1; i++) {
      for (j = cell.j - 1; j <= cell.j + 1; j++) {
        if (i === cell.i && j === cell.j) continue;
        if (i >= 0 && i < grid_height && j >= 0 && j < grid_width) {
          if (grid[i][j] === true) {
            neighbor++;
          } else {
            if (!deadCells.some((e) => e.i === i && e.j === j)) {
              deadCells.push({ i: i, j: j });
            }
          }
        }
      }
    }
    if (neighbor === 2 || neighbor === 3) {
      stayAlive.push(cell);
    }
  });
  deadCells.forEach(function (cell) {
    neighbor = 0;
    for (i = cell.i - 1; i <= cell.i + 1; i++) {
      for (j = cell.j - 1; j <= cell.j + 1; j++) {
        if (i === cell.i && j === cell.j) continue;
        if (i >= 0 && i < grid_height && j >= 0 && j < grid_width) {
          if (grid[i][j] === true) {
            neighbor++;
          }
        }
      }
    }
    if (neighbor === 3) {
      stayAlive.push(cell);
    }
  });
  return stayAlive;
}
