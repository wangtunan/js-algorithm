// 方法一：完全背包问题
export const unboundedKnapsackDP = (wgt, val, cap) => {
  const n = wgt.length;
  // 初始dp表
  const dp = Array.from({ length: n + 1 }, () => new Array(cap + 1).fill(0));
  // 状态转移
  for (let i = 1; i <= n; i++) {
    for (let c = 1; c <= cap; c++) {
      // 物品重量超过背包剩余容量，不放入
      if(wgt[i - 1] > c) {
        dp[i][c] = dp[i - 1][c];
      } else {
        dp[i][c] = Math.max(
          dp[i - 1][c],
          dp[i][c - wgt[i - 1]] + val[i - 1]
        );
      }
    }
  }
  return dp[n][cap];
};

// 方法二：完全背包问题(空间优化)
export const unboundedKnapsackComp = (wgt, val, cap) => {
  const n = wgt.length;
  // 初始dp表
  const dp = new Array(cap + 1).fill(0);
  // 状态转移
  for (let i = 1; i <= n; i++) {
    for(let c = 1; c <= cap; c++) {
      if(wgt[i - 1] <= c) {
        dp[c] = Math.max(
          dp[c],
          dp[c - wgt[i - 1]] + val[i - 1]
        );
      }
    }
  }
  return dp[cap];
};