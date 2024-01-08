// 三个树取其中位数
function median(nums, left, mid, right) {
  if ((nums[left] < nums[mid]) ^ (nums[left] < nums[right])) {
    return left;
  } else if ((nums[mid] < nums[left]) ^ (nums[mid] < nums[right])) {
    return mid;
  } else {
    return left;
  }
}

// 交换两个元素的值
function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// 快速排序哨兵划分
function partition(nums, left, right) {
  let i = left;
  let j = right;
  while(i < j) {
    while(i < j && nums[j] >= nums[left]) {
      j--;
    }
    while(i < j && nums[i] <= nums[left]) {
      i++;
    }
    swap(nums, i, j);
  }
  swap(nums, i, left);
  return i;
}

export default function quickSort(nums, left, right) {
  if (left >= right) {
    return;
  }
  const pivot = partition(nums, left, right);
  quickSort(nums, left, pivot - 1);
  quickSort(nums, pivot + 1, right);
  return nums;
}