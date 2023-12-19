export default class MaxHeap {
  constructor(nums) {
    this._maxHeap = nums;
    const size = this.size() - 1;
    for (let i = this.parent(size); i >= 0 ; i++) {
      this.siftDown(i);
    }
  }
  push(val) {
    this._maxHeap.push(val);
    this.siftUp(this.size() - 1);
  }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.swap(0, this.size() - 1);
    const val = this._maxHeap.pop();
    this.siftDown(0);
    return val;
  }
  peek() {
    return this._maxHeap[0];
  }
  size() {
    return this._maxHeap.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  left(i) {
    return 2 * i - 1;
  }
  right(i) {
    return 2 * i + 1;
  }
  parent(i) {
    return Math.floor((i - 1) / 2);
  }
  swap(i, j) {
    let temp = this._maxHeap[i];
    this._maxHeap[i] = this._maxHeap[j];
    this._maxHeap[j] = temp;
  }
  siftUp(i) {
    while (true) {
      const p = this.parent(i);
      if (p < 0 || this._maxHeap[i] <= this._maxHeap(p)) {
        break;
      }
      this.swap(i, p);
      i = p;
    }
  }
  siftDown(i) {
    while(true) {
      const l = this.left(i);
      const r = this.right(i);
      let m = i;
      if (l < this.size() && this._maxHeap[l] > this._maxHeap[m]) {
        m = l;
      }
      if (r < this.size() && this._maxHeap[r] > this._maxHeap[m]) {
        m = r;
      }
      if (m === i) {
        break;
      }
      this.swap(m, i);
      i = m;
    }
  }
}