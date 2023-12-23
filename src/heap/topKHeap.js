import MaxHeap from './maxHeap.js';

export default class TopKHeap {
  constructor(nums, k) {
    this._heap = new MaxHeap([]);

    for(let i = 0;  i < k; i++) {
      this.pushHeap(nums[i]);
    }

    for(let i = k; i < nums.length; i++) {
      const val = nums[i];
      const peek = this.peekHeap();
      if (val > peek) {
        this.popHeap();
        this.pushHeap(val);
      }
    }
  }
  pushHeap(val) {
    this._heap.push(-val);
  }
  popHeap() {
    return this._heap.pop();
  }
  peekHeap() {
    return -this._heap.peek();
  }
  getHeap() {
    return this._heap._maxHeap.map(num => -num);
  }
}