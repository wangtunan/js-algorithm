// n皇后回溯算法
export const backTracking = (row, n, state, cols, diags1, diags2, res) => {
  // 放置完所有行，记录解
  if(row === n) {
    res.push(state.map(arr => arr.slice()));
    return;
  }
  // 遍历所有列
  for (let col = 0; col < n; col++) {
    // 计算该格子对应的主对角线和次对角线
    const diag1 = row - col + n - 1;
    const diag2 = row + col;
    // 剪枝：不允许该格子所在的列，主/次对角线有皇后
    if(!cols[col] && !diags1[diag1] && !diags2[diag2]) {
      // 尝试：将皇后放置在该格子
      state[row][col] = 'Q';
      cols[col] = true;
      diags1[diag1] = true;
      diags2[diag2] = true;
      // 放置下一行
      backTracking(row + 1, n, state, cols, diags1, diags2, res);
      // 回退：将该格子恢复为空位
      state[row][col] = '#';
      cols[col] = false;
      diags1[diag1] = false;
      diags2[diag2] = false;
    }
  }
};
// n皇后
export const nQueue = (n) => {
  // 初始化n * n的棋盘，Q代表皇后，#代表空位
  const state = Array.from({ length: n }, () => new Array(n).fill('#'));
  // 记录列皇后摆放情况
  const cols = new Array(n).fill(false);
  // 记录主对角线上皇后摆放情况
  const diags1 = new Array(2 * n - 1).fill(false);
  // 记录次对角线上皇后摆放情况
  const diags2 = new Array(2 * n - 1).fill(false);
  const res = [];

  backTracking(0, n, state, cols, diags1, diags2, res);
  return res;
};