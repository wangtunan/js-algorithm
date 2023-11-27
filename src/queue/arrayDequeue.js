export default class Dequeue {
  constructor(capacity) {
    this._capacity = capacity;
    this._initDequeue();
  }
  pushFirst(val) {
    if (this._size >= this._capacity) {
      return;
    }
    const firstIndex = this._getDequeueIndex(this._front - 1);
    this._front = firstIndex;
    this._items[firstIndex] = val;
    this._size++;
  }
  pushLast(val) {
    if (this._size >= this._capacity) {
      return;
    }
    const lastIndex = this._getDequeueIndex(this._front + this._size);
    this._items[lastIndex] = val;
    this._size++;
  }
  popFirst() {
    if (this.isEmpty()) {
      return undefined;
    }
    const first = this.peekFirst();
    this._front = this._getDequeueIndex(this._front + 1);
    this._size--;
    return first;
  }
  popLast() {
    if (this.isEmpty()) {
      return undefined;
    }
    const last = this.peekLast();
    this._size--;
    return last;
  }
  peekFirst() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this._items[this._front];
  }
  peekLast() {
    if (this.isEmpty()) {
      return undefined;
    }
    const lastIndex = this._getDequeueIndex(this._front + this._size - 1);
    return this._items[lastIndex];
  }
  isEmpty() {
    return this._size === 0;
  }
  clear() {
    this._initDequeue();
  }
  getSize() {
    return this._size;
  }
  toArray() {
    const list = new Array(this._size);
    for(let i = 0, j = this._front; i < this._size; i++, j++) {
      const index = this._getDequeueIndex(j);
      list[i] = this._items[index];
    }
    return list;
  }
  _initDequeue() {
    // 队列元素
    this._items = new Array(this._capacity);
    // 队首元素索引
    this._front = 0;
    // 队列元素数量
    this._size = 0;
  }
  _getDequeueIndex(index) {
    // 索引越过头部，跳向尾部
    // 索引越过尾部，跳向头部
    return (index + this._capacity) % this._capacity;
  }
}