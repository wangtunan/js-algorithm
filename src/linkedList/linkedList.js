import ListNode from './listNode.js';

export default class LinkedList {
  constructor() {
    this._head = null;
    this._size = 0;
  }

  push(val) {
    const node = new ListNode(val);
    if (this.isEmpty()) {
      this._head = node;
    } else {
      let current = this._head;
      while(current && current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    
    this._size++;
  }

  insert(val, index) {
    if (!this._isSafeIndex(index, true)) {
      return false;
    }
    const node = new ListNode(val);
    let current = this._head;
    if (index === 0) {
      node.next = current;
      this._head = node;
    } else {
      const prev = this.getNodeAt(index - 1);
      current = prev.next;
      prev.next = node;
      node.next = current;
    }

    this._size++;
    return true;
  }

  remove(val) {
    const removeIndex = this.indexOf(val);
    if (removeIndex >= 0) {
      this.removeAt(removeIndex);
    }
  }

  removeAt(index) {
    if (!this._isSafeIndex(index)) {
      return;
    }
    let current = this._head;
    if (index === 0) {
      this._head = current.next;
    } else {
      const prev = this.getNodeAt(index - 1);
      current = prev.next;
      prev.next = current.next;
    }
    this._size--;
  }

  getNodeAt(index) {
    if (!this._isSafeIndex(index)) {
      return null;
    }
    let current = this._head;
    for (let i = 0; i < index && current !== null; i++) {
      current = current.next;
    }
    return current;
  }

  getSize() {
    return this._size;
  }

  getHead() {
    return this._head;
  }

  isEmpty() {
    return this._size === 0;
  }

  indexOf(val) {
    let current = this._head;
    for (let i = 0; i < this._size && current !== null; i++) {
      if (current.val === val) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  toString() {
    let str = '';
    if (this.isEmpty()) {
      return str;
    }

    let current = this._head;
    str = `${current.val}`;

    for (let i = 1; i < this._size && current != null; i++) {
      current = current.next;
      str += `,${current.val}`;
    }

    return str;
  }

  _isSafeIndex(index, needLast) {
    const lastResult = needLast
      ? index <= this._size
      : index < this._size;

    return index >= 0 && lastResult;
  }
}