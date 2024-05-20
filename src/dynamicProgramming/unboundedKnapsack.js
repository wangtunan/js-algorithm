// 完全背包问题方法一：dp
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

// 完全背包问题方法二：空间优化
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

// 零钱兑换Ⅰ方法一：dp
export const coinChangeDP = (coins, amt) => {
  const n = coins.length;
  const max = amt + 1;
  // 初始化dp表
  const dp = Array.from({ length: n + 1 }, () => Array.from({ length: max }, () => 0));
  // 首行、首列
  for (let a = 1; a <= amt; a++) {
    dp[0][a] = max;
  }
  // 状态转移：其余行和列
  for (let i = 1; i <= n; i++) {
    for (let a = 1; a <= amt; a++) {
      if(coins[i - 1] > a) {
        // 目标金额超出，不选择
        dp[i][a] = dp[i - 1][a];
      } else {
        // 不选择和选硬币i这两种方案的较小值
        dp[i][a] = Math.min(
          dp[i - 1][a],
          dp[i][a - coins[i - 1]] + 1
        );
      }
    }
  }
  return dp[n][amt] !== max ? dp[n][amt] : -1;
};

// 零钱兑换Ⅰ方法二：空间优化
export const coinChangeDPComp = (coins, amt) => {
  const n = coins.length;
  const max = amt + 1;
  // 初始化dp表
  const dp = Array.from({ length: max }, () => max);
  dp[0] = 0;
  // 状态转移
  for (let i = 1; i <= n; i++) {
    for (let a = 1; a <= amt; a++) {
      if(coins[i - 1] <= a) {
        dp[a] = Math.min(
          dp[a],
          dp[a - coins[i - 1]] + 1
        );
      }
    }
  }
  return dp[amt] !== max ? dp[amt] : -1;
};

// 零钱兑换Ⅱ方法一：dp
export const coinChangeIIDP = (coins, amt) => {
  const n = coins.length;
  // 初始dp表
  const dp = Array.from({ length: n + 1 }, () => Array.from({ length: amt + 1 }, () => 0));
  // 首列
  for (let i = 0; i <= n; i++) {
    dp[i][0] = 1;
  }
  // 状态转移
  for (let i = 1; i <= n; i++) {
    for (let a = 1; a <= amt; a++) {
      if(coins[i - 1] > a) {
        // 超出目标金额，不选
        dp[i][a] = dp[i - 1][a];
      } else {
        // 不选和选择i，这两种方案之和
        dp[i][a] = dp[i - 1][a] + dp[i][a - coins[i - 1]];
      }
    }
  }
  return dp[n][amt];
};

// // 零钱兑换Ⅱ方法二：空间优化
export const coinChangeIIDPComp = (coins, amt) => {
  const n = coins.length;
  // 初始dp表
  const dp = Array.from({ length: amt + 1 }, () => 0);
  dp[0] = 1;
  // 状态转移
  for (let i = 1; i <= n; i++) {
    for (let a = 1; a <= amt; a++) {
      if(coins[i - 1] <= a) {
        // 不选和选择i，这两种方案之和
        dp[a] = dp[a] + dp[a - coins[i - 1]];
      }
    }
  }
  return dp[amt];
};