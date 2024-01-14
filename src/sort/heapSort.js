function siftDown(nums, n, i) {
  while(true) {
    const left = i * 2 + 1;
    const right = i * 2 + 2;
    let max = i;
    if (left < n && nums[left] > nums[max]) {
      max = left;
    }
    if (right < n && nums[right] > nums[max]) {
      max = right;
    }
    if (max === i) {
      break;
    }
    [nums[max], nums[i]] = [nums[i], nums[max]];
    i = max;
  }
}

export default function heapSort(nums) {
  const len = nums.length;
  // 建堆
  for(let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    siftDown(nums, len, i);
  }
  // 从堆中取最大元素，循环n - 1轮
  for(let i = len - 1; i > 0; i--) {
    // 交换堆顶和堆底元素
    [nums[0], nums[i]] = [nums[i], nums[0]];
    // 从根节点开始，重新进行堆化
    siftDown(nums, i, 0);
  }
  return nums
}