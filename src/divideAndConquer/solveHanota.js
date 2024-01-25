function move(source, target) {
  // 从source柱顶部拿出一个圆盘
  const pan = source.pop();
  // 将圆盘放入target柱
  target.push(pan);
}
function dfs(i, source, buffer, target) {
  if (i === 1) {
    move(source, target);
    return;
  }
  // 子问题，从source上移动n - 1个圆盘到换buffer缓冲柱(借助target)
  dfs(i - 1, source, target, buffer);
  move(source, target);
  // 子问题，从buffer上移动n - 1个圆盘到target目标柱(借助source)
  dfs(i - 1, buffer, source, target);
}
export default function solveHanota(A, B, C) {
  const len = A.length;
  dfs(len, A, B, C);
}