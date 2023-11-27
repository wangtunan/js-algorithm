import LinkedList from './linkedList.js';
import DoublyNode from './doublyNode.js';

export default class DoublyLinkedList extends LinkedList {
  constructor() {
    super();
    this._tail = null;
  }

  push(val) {
    const node = new DoublyNode(val);
    if (this.isEmpty()) {
      this._head = node;
      this._tail = node;
    } else {
      const tail = this._tail;
      tail.next = node;
      node.prev = tail;
      this._tail = node;
    }
    this._size++;
  }

  insert(val, index) {
    if (!this._isSafeIndex(index, true)) {
      return false;
    }
    const node = new DoublyNode(val);
    let current = null;
    if (index === 0) {
      if (this._head === null) {
        this._head = node;
        this._tail = node;
      } else {
        current = this._head;
        node.next = current;
        current.prev = node;
        this._head = node;
      }
    } else if (index === this._size) {
      current = this._tail;
      current.next = node;
      node.prev = current;
      this._tail = node;
    } else {
      const prev = this.getNodeAt(index - 1);
      current = prev.next;
      prev.next = node;
      node.next = current;
      node.prev = prev;
      current.prev = node;
    }
    this._size++;
    return true;
  }

  removeAt(index) {
    if (!this._isSafeIndex(index)) {
      return;
    }
    let current = null;
    if (index === 0) {
      current = this._head;
      this._head = current.next;
      if (this._size === 1) {
        this._tail = null;
      } else {
        this._head.prev = null;
      }
    } else if(index === this._size - 1) {
      current = this._tail;
      this._tail = current.prev;
      this._tail.next = null;
    } else {
      const prev = this.getNodeAt(index - 1);
      current = prev.next;
      prev.next = current.next;
      current.next.prev = prev;
    }
    this._size--;
  }

  getTail() {
    return this._tail;
  }

  reverseToString() {
    let str = '';
    if (this.isEmpty()) {
      return str;
    }
    let current = this._tail;
    str = `${current.val}`;
    while(current && current.prev !== null) {
      current = current.prev;
      str += `,${current.val}`;
    }
    return str;
  }
}