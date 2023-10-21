import LinkedList from './linkedList.js';
import ListNode from './listNode.js';

export default class CircularLinkedList extends LinkedList {
  constructor() {
    super();
  }

  push(val) {
    const node = new ListNode(val);
    if (this._head === null) {
      this._head = node;
    } else {
      const current = this.getNodeAt(this._size - 1);
      current.next = node;
    }
    node.next = this._head;
    this._size++;
  }

  insert(val, index) {
    if (!this._isSafeIndex(index, true)) {
      return false;
    }
    const node = new ListNode(val);
    let current;
    if (index === 0) {
      if (this._head === null) {
        this._head = node;
        node.next = this._head;
      } else {
        node.next = this._head;
        current = this.getNodeAt(this._size - 1);
        this._head = node;
        current.next = this._head;
      }
    } else {
      const prev = this.getNodeAt(index - 1);
      current = prev.next;
      prev.next = node;
      node.next = current;
    }
    this._size++;
    return true;
  }

  removeAt(index) {
    if (!this._isSafeIndex(index)) {
      return;
    }
    let current;
    if (index === 0) {
      if (this._size === 1) {
        this._head = null;
      } else {
        const tail = this.getNodeAt(this._size - 1);
        current = this._head;
        this._head = current.next;
        tail.next = this._head;
      }
    } else {
      const prev = this.getNodeAt(index - 1);
      current = prev.next;
      prev.next = current.next;
    }
    this._size--;
  }
}
