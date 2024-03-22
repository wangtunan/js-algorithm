const dfs = (n) => {
  if (n === 1 || n === 2) {
    return n;
  }
  const count = dfs(n - 1) + dfs(n - 2);
  return count;
};
export default function climbingStairsDFS(n) {
  return dfs(n);
}