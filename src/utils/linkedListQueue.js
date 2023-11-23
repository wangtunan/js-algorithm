import ListNode from './listNode.js';

export default class LinkedListQueue {
  constructor() {
    this._head = null;
    this._tail = null;
    this._size = 0;
  }
  push(val) {
    const node = new ListNode(val);
    if (this.isEmpty()) {
      this._head = node;
      this._tail = node;
    } else {
      this._tail.next = node;
      this._tail = node;
    }
    this._size++;
  }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    const peek = this.peek();
    this._head = this._head.next;
    this._size--;
    return peek;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this._head.val;
  }
  isEmpty() {
    return this._size === 0;
  }
  clear() {
    this._head = null;
    this._tail = null;
    this._size = 0;
  }
  getSize() {
    return this._size;
  }
  toArray() {
    const list = new Array(this._size);
    let curr = this._head;
    for (let i = 0; i < this._size; i++) {
      list[i] = curr.val;
      curr = curr.next;
    }
    return list;
  }
}