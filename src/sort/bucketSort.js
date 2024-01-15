export default function bucketSort(nums) {
  const len = nums.length;
  const k = Math.floor(len / 2);
  const buckets = [];
  // 初始化桶
  for(let i = 0; i < k; i++) {
    buckets.push([]);
  }
  // 元素分桶
  for(let i = 0; i < len; i++) {
    const num = nums[i];
    const index = Math.floor(num * k);
    buckets[index].push(num);
  }
  // 对桶中元素进行排序
  for(let i = 0; i < k; i++) {
    const bucket = buckets[i];
    bucket.sort((a, b) => a - b);
  }
  // 合并桶中元素
  let i = 0;
  for(const bucket of buckets) {
    for(const num of bucket) {
      nums[i++] = num;
    }
  }
  return nums;
}