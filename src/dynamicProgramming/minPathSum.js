export const grid = [
  [1, 3, 1, 5],
  [2, 2, 4, 2],
  [5, 3, 2, 1],
  [4, 3, 5, 2]
];

// 方法一：暴力搜索
export const minPathSumDFS = (grid, i, j) => {
  // 终止条件
  if(i === 0 && j === 0) {
    return grid[0][0];
  }
  // 越界
  if(i < 0 || j < 0) {
    return Infinity;
  }
  // 计算左上角到[i-1,j]的最小路径和
  const left = minPathSumDFS(grid, i - 1, j);
  // 计算左上角到[i,j-1]的最小路径和
  const up = minPathSumDFS(grid, i, j - 1);
  // 计算左上角到[i,j]的最小路径和
  return Math.min(left, up) + grid[i][j];
};

// 方法二：记忆化搜索
export const minPathSumMemberDFS = (grid, member, i, j) => {
  // 终止条件
  if(i === 0 && j === 0) {
    return grid[0][0];
  }
  // 越界
  if(i < 0 || j < 0) {
    return Infinity;
  }
  // 剪枝：如果有记录，则直接返回
  if(member[i][j] !== -1) {
    return member[i][j];
  }
  // 计算左上角到[i-1,j]的最小路径和
  const left = minPathSumDFS(grid, i - 1, j);
  // 计算左上角到[i,j-1]的最小路径和
  const up = minPathSumDFS(grid, i, j - 1);
  // 记忆化
  member[i][j] = Math.min(left, up) + grid[i][j];
  return member[i][j];
};

// 方法三：动态规划
export const minPathSumDP = (grid) => {
  const n = grid.length;
  const m = grid[0].length;
  // 初始化dp表
  const dp = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));
  dp[0][0] = grid[0][0];
  // 状态转移：首行
  for (let j = 1; j < m; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }
  // 状态转移：首列
  for (let i = 1; i < n; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  // 状态转移：其余行和列
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[n - 1][m - 1];
};

// 方法三：动态规划(空间优化版)
export const minPathSumDPComp = (grid) => {
  const n = grid.length;
  const m = grid[0].length;
  // 初始化dp表
  const dp = new Array(m);
  dp[0] = grid[0][0];
  // 状态转移：首行
  for (let j = 1; j < m; j++) {
    dp[j] = dp[j - 1] + grid[0][j];
  }
  // 状态转移：其余行和列
  for (let i = 1; i < n; i++){
    // 状态转移：首列
    dp[0] = dp[0] + grid[i][0];
    // 状态转移：其余列
    for (let j = 1; j < m; j++) {
      dp[j] = Math.min(dp[j], dp[j - 1]) + grid[i][j];
    }
  }
  return dp[m - 1];
};