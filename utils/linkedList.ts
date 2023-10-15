import ListNode from './listNode'

export default class LinkedList {
  private _size: number;
  public head: ListNode | null;
  constructor () {
    this.head = null;
    this._size = 0;
  }
  /**
   * 向链表尾部添加一个节点
   * @param val - 节点的值
   */
  push (val: number) {
    const node = new ListNode(val)

    if (this.isEmpty()) {
      this.head = node;
    } else {
      let current = this.head
      while(current && current.next !== null) {
        current = current.next
      }
      current!.next = node
    }
    this._size++;
  }
  /**
   * 在指定索引位置插入一个新节点
   * @param val 节点的值
   * @param index 待插入节点的索引
   */
  insert(val: number, index: number) {

  }

  remove(val: number) {

  }

  removeAt(index: number) {

  }

  /**
   * 返回链表的长度
   */
  getSize(): number {
    return this._size;
  }

  /**
   * 返回链表的头节点
   */
  getHead (): ListNode | null {
    return this.head;
  }

  /**
   * 判断链表是否为空
   */
  isEmpty (): boolean {
    return this.getSize() === 0;
  }

  /**
   * 返回表示整个链表的字符串
   */
  toString (): string {
    let str = '';
    if (this.isEmpty()) {
      return str;
    }

    let current = this.head;
    str = `${current!.val}`;
    while(current && current.next !== null) {
      current = current.next;
      str += `,${current.val}`;
    }

    return str;
  }
}