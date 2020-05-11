function initGOL(grid, seed, chance) {
  var rng = new RNG(seed);
  for (i = 0; i < grid.length; i++) {
    for (j = 0; j < grid[0].length; j++) {
      grid[i][j] = rng.nextBool(chance);
    }
  }
}
