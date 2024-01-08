export default function bubbleSort(nums) {
  // 外层循环：未排序区间[0, n]
  for(let i = nums.length - 1; i >= 0; i--) {
    // 内层循环：将未排序区间中最大的元素，交换到该区间的最右侧。
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums;
}