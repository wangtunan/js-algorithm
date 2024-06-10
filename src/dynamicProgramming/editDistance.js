// 最少编辑距离问题：DP
export const editDistanceDP = (s, t) => {
  const n = s.length;
  const m = t.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));

  // 状态转移：首行，首列
  for (let i = 1; i <= n; i++) {
    dp[i][0] = i;
  }
  for (let j = 1; j <= m; j++) {
    dp[0][j] = j;
  }

  // 状态转移：其余行和列
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (s.charAt(i - 1) === t.charAt(j - 1)) {
        // 字符相等，直接跳过
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // 最小编辑步数：插入、删除、替换这三种操作的最小编辑步数 + 1
        dp[i][j] = Math.min(
          dp[i][j - 1],
          dp[i - 1][j],
          dp[i - 1][j - 1]
        ) + 1;
      }
    }
  }

  return dp[n][m];
};

// 最小编辑距离问题：空间优化
export const editDistanceDPComp = (s, t) => {
  const n = s.length;
  const m = t.length;
  const dp = new Array(m + 1).fill(0);

  // 状态转移：首行
  for (let j = 1; j <= m; j++) {
    dp[j] = j;
  }
  // 状态转移：其余行
  for (let i = 1; i <= n; i++) {
    let leftUp = dp[0];
    dp[0] = i;
    for (let j = 1; j <= m; j++) {
      const temp = dp[j];
      if (s.charAt(i - 1) === t.charAt(j - 1)) {
        dp[j] = leftUp;
      } else {
        dp[j] = Math.min(dp[j - 1], dp[j], leftUp) + 1;
      }
      leftUp = temp;
    }
  }

  return dp[m];
};
