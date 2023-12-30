import binarySearchIntersection  from './binarySearchIntersection.js';

export default function binarySearchRightEdge(nums, target) {
  const i = binarySearchIntersection(nums, target + 1);
  const j = i - 1;

  if (j === -1 || nums[i] !== target) {
    return -1;
  }
  return j;
}