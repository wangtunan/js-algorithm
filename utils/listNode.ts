export default class ListNode {
  public val: number;
  public next: ListNode | null;

  constructor (val?: number, next?: ListNode | null) {
    this.val = val || 0;
    this.next = next || null;
  }
}