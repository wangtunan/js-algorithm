import binarySearchIntersection  from './binarySearchIntersection.js';

export default function binarySearchLeftEdge(nums, target) {
  const i = binarySearchIntersection(nums, target);
  if (i === nums.length || nums[i] !== target) {
    return -1;
  }
  return i;
}