const maxValue = function (grid) {
  if (grid.length === 0 || grid[0].length === 0) return 0;
  let rowLimit = grid.length;
  let colLimit = grid[0].length;

  for (let row = 0; row < rowLimit; row++) {
    for (let col = 0; col < colLimit; col++) {
      let left = col - 1 < 0 ? 0 : grid[row][col - 1];
      let top = row - 1 < 0 ? 0 : grid[row - 1][col];

      grid[row][col] = grid[row][col] + Math.max(left, top);
    }
  }

  return grid[rowLimit - 1][colLimit - 1];
};

console.log(
  maxValue([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);


var coinChange = function (coins, amount) {
  if (amount === 0) {
    return 0;
  }

  let dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i <= acoumt; i++) {
    for (let coin of coins) {
      if (i - amount < 0) continue;
      dp[i] = Math.min(dp[i - coin] + 1, dp[i]);
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};

var longestCommonSubsequence = function (text1, text2) {
  const n = text1.length;
  const m = text2.length;
  let dp = Array.from(new Array(n + 1), () => new Array(m + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[n][m];
};

console.log(longestCommonSubsequence("abcde", "ace"));
