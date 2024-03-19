
// 无相同元素全排列回溯算法
export const backTrackingNoEqualValue = (state, choices, selected, res) => {
  // 已选择数量等于元素数量时，退出回溯
  if(state.length === choices.length) {
    res.push([...state]);
    return;
  }
  // 遍历元素列表
  choices.forEach((choice, i) => {
    // 剪枝：不允许重复元素
    if(!selected[i]) {
      // 尝试：做出选择
      selected[i] = true;
      state.push(choice);
      // 下一次选择
      backTrackingNoEqualValue(state, choices, selected, res);
      // 回退：撤销选择，恢复到之前的状态
      selected[i] = false;
      state.pop();
    }
  });
};


// 无相同元素全排列
export const permutationsNoEqualValue = (nums) => {
  const selected = new Array(nums.length).fill(false);
  const res = [];
  backTrackingNoEqualValue([], nums, selected, res);
  return res;
};

// 有相同元素全排列回溯算法
export const backTrackingHasEqualValue = (state, choices, selected, res) => {
  // 已选择数量等于元素数量时，退出回溯
  if(state.length === choices.length) {
    res.push([...state]);
    return;
  }
  // 开启重复项哈希表
  const duplicated = new Set();
  // 遍历元素列表
  choices.forEach((choice, i) => {
    // 剪枝：不允许重复元素且不允许相等元素
    if(!selected[i] && !duplicated.has(choice)) {
      // 尝试：做出选择
      selected[i] = true;
      state.push(choice);
      duplicated.add(choice);
      // 下一次选择
      backTrackingHasEqualValue(state, choices, selected, res);
      // 回退：撤销选择，恢复到之前的状态
      selected[i] = false;
      state.pop();
    }
  });
};

// 有相同元素全排列
export const permutationsHasEqualValue = (nums) => {
  const selected = new Array(nums.length).fill(false);
  const res = [];
  backTrackingHasEqualValue([], nums, selected, res);
  return res;
};