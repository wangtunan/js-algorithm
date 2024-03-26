export default function minCostClimbingStairsDP(cost) {
  const n = cost.length - 1;
  if (n === 1 || n === 2) {
    return cost[n];
  }
  // 初始状态：预设最小问题的解
  let a = cost[1];
  let b = cost[2];
  // 状态转移：从较小的子问题逐步求解较大子问题
  for(let i = 3; i <= n; i++) {
    let temp = b;
    b = Math.min(a, b) + cost[i];
    a = temp;
  }
  return b;
}