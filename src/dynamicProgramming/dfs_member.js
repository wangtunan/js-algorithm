const dfsMember = (n, member) => {
  if (n === 1 || n === 2) {
    return n;
  }
  if (member[n] !== -1) {
    return member[n];
  }
  const count = dfsMember(n - 1, member) + dfsMember(n - 2, member);
  member[n] = count;
  return count;
};
export default function climbingStairsDfsMember(n) {
  const member = new Array(n + 1).fill(-1);
  return dfsMember(n, member);
}