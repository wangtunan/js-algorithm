export default function selectionSort(nums) {
  let n = nums.length;
  // 外层循环，未排序区间
  for(let i = 0; i < n - 1; i++) {
    let k = i;
    // 内层循环，在未排序区间中选择值最小的
    for(let j = i + 1; j < n; j++) {
      if (nums[j] < nums[i]) {
        k = j;
      }
    }
    // 将最小元素和未排序区间的首个元素互换(已排序区间末尾)
    [nums[i], nums[k]] = [nums[k], nums[i]];
  }
  return nums;
}