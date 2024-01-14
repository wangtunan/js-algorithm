function merge(nums, left, mid, right) {
  let temp = new Array(right - left + 1);
  let i = left;
  let j = mid + 1;
  let k = 0;
  // 依次比较左、右两个数组中的元素
  while(i <= mid && j <= right) {
    if (nums[i] <= nums[j]) {
      temp[k++] = nums[i++];
    } else {
      temp[k++] = nums[j++];
    }
  }
  // 如果左数组中还有元素
  while(i <= mid) {
    temp[k++] = nums[i++];
  }
  // 如果右数组中还有元素
  while(j <= right) {
    temp[k++] = nums[j++];
  }
  // 临时数组中的元素赋值到原数组
  for(let k = 0; k < temp.length; k++) {
    nums[left + k] = temp[k];
  }
}

export default function mergeSort(nums, left, right) {
  if (left >= right) {
    return;
  }
  const mid = Math.floor((left + right) / 2);
  // 左数组划分
  mergeSort(nums, left, mid);
  // 右数组划分
  mergeSort(nums, mid + 1, right);
  // 左、右有序数组合并
  merge(nums, left, mid, right);
  return nums;
}