// 方法一：暴力搜索
export const knapsackDFS = (wgt, val, i, c) => {
  // 已选完或背包容量为0，则返回价值0
  if(i === 0 || c === 0) {
    return 0;
  }
  // 物品重量超过背包剩余容量，不放入物品
  if(wgt[i - 1] > c) {
    return knapsackDFS(wgt, val, i - 1, c);
  }
  // 计算不放入物品i的最大价值
  const noVal = knapsackDFS(wgt, val, i - 1, c);
  // 计算放入物品i的最大价值
  const yesVal = knapsackDFS(wgt, val, i - 1, c - wgt[i - 1]) + val[i - 1];
  // 返回最大价值
  return Math.max(noVal, yesVal);
};

// 方法二：记忆化搜索
export const knapsackMemberDFS = (wgt, val, member, i, c) => {
  // 已选完或背包容量为0，则返回价值0
  if(i === 0 || c === 0) {
    return 0;
  }
  // 如果已被计算过，则直接返回
  if(member[i][c] !== -1) {
    return member[i][c];
  }
  // 物品重量超过背包剩余容量，不放入物品
  if(wgt[i - 1] > c) {
    return knapsackMemberDFS(wgt, val, member, i - 1, c);
  }
  // 计算不放入物品i的最大价值
  const noVal = knapsackMemberDFS(wgt, val, member,  i - 1, c);
  // 计算放入物品i的最大价值
  const yesVal = knapsackMemberDFS(wgt, val, member, i - 1, c - wgt[i - 1]) + val[i - 1];
  // 存储当前计算结果
  member[i][c] = Math.max(noVal, yesVal);
  // 返回最大价值
  return member[i][c];
};

// 方法三：动态规划
export const knapsackDP = (wgt, val, cap) => {
  const n = wgt.length;
  // 初始dp表
  const dp = Array.from({ length: n + 1 }, () => new Array(cap + 1).fill(0));
  // 状态转移
  for (let i = 1; i <= n; i++) {
    for (let c = 1; c <= cap; c++) {
      // 物品重量超过背包剩余容量，不放入物品
      if(wgt[i - 1] > c) {
        dp[i][c] = dp[i - 1][c];
      } else {
        dp[i][c] = Math.max(
          dp[i - 1][c],
          dp[i - 1][c - wgt[i - 1]] + val[i - 1]
        );
      }
    }
  }
  return dp[n][cap];
};

// 方法三：动态规划(空间优化)
export const knapsackDPComp = (wgt, val, cap) => {
  const n = wgt.length;
  // 初始dp表
  const dp = new Array(cap + 1).fill(0);
  // 状态转移
  for (let i = 1; i <= n; i++) {
    for(let c = cap; c >= 1; c--) {
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
