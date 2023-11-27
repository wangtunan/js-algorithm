import ListNode from './listNode.js';

export default class DoublyNode extends ListNode {
  constructor(val, next, prev) {
    super(val, next);
    this.prev = prev || null;
  }
}