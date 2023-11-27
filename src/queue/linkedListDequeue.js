import DoublyNode from '../linkedList/doublyNode.js';

export default class LinkedListDequeue {
  constructor() {
    this._head = null;
    this._tail = null;
    this._size = 0;
  }
  pushFirst(val) {
    const node = new DoublyNode(val);
    if (this.isEmpty()) {
      this._head = node;
      this._tail = node;
    } else {
      this._head.prev = node;
      node.next = this._head;
      this._head = node;
    }
    this._size++;
  }
  pushLast(val) {
    const node = new DoublyNode(val);
    if (this.isEmpty()) {
      this._head = node;
      this._tail = node;
    } else {
      this._tail.next = node;
      node.prev = this._tail;
      this._tail = node;
    }
    this._size++;
  }
  popFirst() {
    if (this.isEmpty()) {
      return undefined;
    }
    const val = this._head.val;
    const next = this._head.next;
    if (next !== null) {
      next.prev = null;
      this._head.next = null;
    }
    this._head = next;
    this._size--;
    return val;
  }
  popLast() {
    if (this.isEmpty()) {
      return undefined;
    }
    const val = this._tail.val;
    const prev = this._tail.prev;
    if (prev !== null) {
      prev.next = null;
      this._tail.prev = null;
    }
    this._tail = prev;
    this._size--;
    return val;
  }
  peekFirst() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this._head.val;
  }
  peekLast() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this._tail.val;
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