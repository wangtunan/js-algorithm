// 无重复元素子集和回溯算法
export const backTrackingNoEqualValue = (state, target, choices, start, res) => {
  // 子集和等于目标值，记录子集
  if(target === 0) {
    res.push([...state]);
    return;
  }
  // 遍历所有选择
  // 剪枝一：从start开始遍历，避免出现重复自己
  for (let i = start; i < choices.length; i++) {
    const choice = choices[i];
    // 剪枝二：如果子集和超过target，结束循环
    if(target - choice < 0) {
      break;
    }
    // 尝试：做出选择，更新target和start
    state.push(choice);
    // 下一次选择
    backTrackingNoEqualValue(state, target - choice, choices, i, res);
    // 回退：撤销选择
    state.pop();
  }
}; 
// 无重复元素子集和
export const subsetSumNoEqualValue = (nums, target) => {
  const state = []; // 子集
  const res = [];   // 结果 
  const start = 0;  // 起始遍历索引
  nums.sort((a, b) => a - b); // 排序数组
  backTrackingNoEqualValue(state, target, nums, start, res);
  return res;
};

// 有重复元素子集和回溯算法
export const backTrackingHasEqualValue = (state, target, choices, start, res) => {
  // 子集和等于目标值，记录子集
  if(target === 0) {
    res.push([...state]);
    return;
  }
  // 遍历所有选择
  // 剪枝一：从start开始遍历，避免出现重复自己
  for (let i = start; i < choices.length; i++) {
    const choice = choices[i];
    // 剪枝二：如果子集和超过target，结束循环
    if(target - choice < 0) {
      break;
    }
    // 剪枝三：相同元素时，直接跳过
    if(choice === choices[i - 1]) {
      continue;
    }
    // 尝试：做出选择，更新target和start
    state.push(choice);
    // 下一次选择
    backTrackingHasEqualValue(state, target - choice, choices, i, res);
    // 回退：撤销选择
    state.pop();
  }
};

// 有重复元素字节和
export const subsetSumHasEqualValue = (nums, target) => {
  const state = []; // 子集
  const res = [];   // 结果 
  const start = 0;  // 起始遍历索引
  nums.sort((a, b) => a - b); // 排序数组
  backTrackingHasEqualValue(state, target, nums, start, res);
  return res;
};