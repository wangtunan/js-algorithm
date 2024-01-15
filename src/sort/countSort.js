export default function countSort(nums) {
  const len = nums.length;
  // 统计最大元素
  let max = 0;
  for(const num of nums) {
    max = Math.max(max, num);
  }
  // 统计各数字出现的次数
  const counters = new Array(max + 1).fill(0);
  for(const num of nums) {
    counters[num]++;
  }
  // 计算前缀和，将出现次数转换为尾索引
  for(let i = 0; i < max; i++) {
    counters[i + 1] += counters[i];
  }
  // 倒序遍历，将各元素填入结果数组res中
  const res = [];
  for(let i = len - 1; i >= 0; i--) {
    const num = nums[i];
    res[counters[num] - 1] = num;
    counters[num]--;
  }
  // 结果数组res覆盖原始nums数组
  for(let i = 0; i < len; i++) {
    nums[i] = res[i];
  }
  return nums;
}