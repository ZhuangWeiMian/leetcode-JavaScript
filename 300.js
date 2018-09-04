var numIslands = function (grid) {
    let map = {};
    let result = 0;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        let item = i + 'I' + j
        if (!map[item] && grid[i][j] === "1") {
          map[item] = true;
          result++;
          dfs(i - 1, j);
          dfs(i + 1, j);
          dfs(i, j + 1);
          dfs(i, j - 1);
        }
      }
    }
    function dfs(i, j) {
      if (i < 0 || i > grid.length - 1 || j < 0 || j > grid[0].length - 1) { return false; }
      if (grid[i][j] === "1" && !map[i + 'I' + j]) {
        let item = i + 'I' + j;
        map[item] = true;
        return dfs(i - 1, j) || dfs(i + 1, j) || dfs(i, j + 1) || dfs(i, j - 1);
      }
    }
    return result;
  };