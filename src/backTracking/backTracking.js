function isSolution(state) {
  const lastNode = state.length > 0 ? state[state.length - 1] : {};
  return lastNode.val === 7;
}
function recordSolution(state, res) {
  res.push([...state]);
}
function isValid(choice) {
  return !!choice && choice.val !== 3;
}
function makeChoice(state, choice) {
  state.push(choice);
}
function undoChoice(state) {
  state.pop();
}
export default function backTracking(state, choices, res) {
  // 判断是否为解
  if(isSolution(state)) {
    recordSolution(state, res);
  }
  // 遍历所有选择
  for (const choice of choices) {
    // 剪枝
    if(isValid(choice)) {
      // 尝试做出选择
      makeChoice(state, choice);
      // 下一轮选择
      backTracking(state, [choice.left, choice.right], res);
      // 回退
      undoChoice(state);
    }
  }
}