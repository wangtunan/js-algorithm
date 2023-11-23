export default class ArrayQueue {
  constructor(capacity) {
    this._capacity = capacity;
    this._initQueue();
  }
  push(val) {
    if (this._size >= this._capacity) {
      return;
    }
    const tailIndex = this._getQueueIndex(this._front + this._size);
    this._items[tailIndex] = val;
    this._size++;
  }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    const peek = this.peek();
    this._front = this._getQueueIndex(this._front + 1);
    this._size--;
    return peek;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this._items[this._front];
  }
  isEmpty() {
    return this._size === 0;
  }
  clear() {
    this._initQueue();
  }
  getSize() {
    return this._size;
  }
  toArray() {
    const list = new Array(this._size);
    for (let i = 0, j = this._front; i < this._size; i++, j++) {
      const index = this._getQueueIndex(j);
      list[i] = this._items[index];
    }
    return list;
  }
  _initQueue() {
    // 队列元素
    this._items = new Array(this._capacity);
    // 队首元素索引
    this._front = 0;
    // 队列数量
    this._size = 0;
  }
  _getQueueIndex(index) {
    return index % this._capacity;
  }
}