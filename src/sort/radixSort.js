function digit(num, exp) {
  return Math.floor(num / exp) % 10;
}

function countingSortDigit(nums, exp) {
  const counter = new Array(10).fill(0);
  const n = nums.length;
  // 统计 0~9 各数字的出现次数
  for (let i = 0; i < n; i++) {
    const d = digit(nums[i], exp); 
    counter[d]++;
  }
  // 求前缀和，将出现个数转换为数组索引
  for (let i = 1; i < 10; i++) {
    counter[i] += counter[i - 1];
  }
  // 倒序遍历，根据桶内统计结果，将各元素填入 res
  const res = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    const d = digit(nums[i], exp);
    const j = counter[d] - 1; 
    res[j] = nums[i];
    counter[d]--;
  }
  // 使用结果覆盖原数组 nums
  for (let i = 0; i < n; i++) {
    nums[i] = res[i];
  }
}

export default function radixSort(nums) {
  // 获取最大值
  let max = Number.MIN_VALUE;
  for(const num of nums) {
    if (num > max) {
      max = num;
    }
  }
  // 从低位到高位的顺序遍历
  for(let exp = 1; exp <= max; exp *= 10) {
    countingSortDigit(nums, exp);
  }
  return nums;
}