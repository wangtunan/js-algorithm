function dfs(nums, target, i, j) {
  // 区间为空
  if (i > j) {
    return -1;
  }
  const mid = i + ((j - i) >> 1);
  if (nums[mid] < target) {
    return dfs(nums, target, mid + 1, j);
  } else if (nums[mid] > target) {
    return dfs(nums, target, i, mid - 1);
  } else {
    return mid;
  }
}
export default function binarySearchRecursion(nums, target) {
  const len = nums.length;
  return dfs(nums, target, 0, len - 1);
}