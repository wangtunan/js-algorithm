export default function insertionSort(nums) {
  // 外层循环：已排序元素数量
  for(let i = 1; i < nums.length; i++) {
    const base = nums[i];
    let j = i - 1;
    // 内层循环：将base插入到已排序部分的正确位置
    while(j >= 0 && nums[j] > base) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = base;
  }
  return nums;
}