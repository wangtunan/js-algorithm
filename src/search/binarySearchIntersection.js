export default function binarySearchIntersection(nums, target) {
  let i = 0;
  let j = nums.length - 1;
  while(i <= j) {
    const m = Math.floor(i + (j - i) / 2);
    const val = nums[m];
    if (val < target) {
      i = m + 1;
    } else if (val > target) {
      j = m - 1;
    } else {
      j = m - 1;
    }
  }
  return i;
}