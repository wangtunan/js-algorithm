import ListNode from '../linkedList/listNode.js';

export default class LinkedListStack {
  constructor() {
    this._head = null;
    this._size = 0;
  }
  push(element) {
    const node = new ListNode(element);
    node.next = this._head;
    this._head = node;
    this._size++;
  }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    const popVal = this.peek();
    this._head = this._head.next;
    this._size--;
    return popVal;
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
    this._size = 0;
  }
  getSize() {
    return this._size;
  }
  toArray() {
    if (this.isEmpty()) {
      return [];
    }
    const list = new Array(this._size);
    let curr = this._head;
    for(let i = this._size - 1; i >= 0; i--) {
      list[i] = curr.val;
      curr = curr.next;
    }
    return list;
  }
}