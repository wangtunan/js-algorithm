import DoublyLinkedList from '../doublyLinkedList.js';

let doublyLinkedList = null;

describe('DoublyLinkedList tests', () => {
  beforeEach(() => {
    doublyLinkedList = new DoublyLinkedList();
  });

  it('test DoublyLinkedList push()', () => {
    expect(doublyLinkedList.isEmpty()).toBe(true);
    doublyLinkedList.push(1);
    expect(doublyLinkedList.toString()).toBe('1');
    doublyLinkedList.push(3);
    doublyLinkedList.push(2);
    expect(doublyLinkedList.toString()).toBe('1,3,2');
    doublyLinkedList.push(9);
    expect(doublyLinkedList.toString()).toBe('1,3,2,9');
    expect(doublyLinkedList.reverseToString()).toBe('9,2,3,1');
  });

  it('test DoublyLinkedList insert()', () => {
    expect(doublyLinkedList.isEmpty()).toBe(true);
    expect(doublyLinkedList.insert(1, -1)).toBe(false);
    expect(doublyLinkedList.isEmpty()).toBe(true);
    expect(doublyLinkedList.insert(1, 0)).toBe(true);
    expect(doublyLinkedList.toString()).toBe('1');
    expect(doublyLinkedList.insert(2, 0)).toBe(true);
    expect(doublyLinkedList.toString()).toBe('2,1');
    expect(doublyLinkedList.insert(3, 0)).toBe(true);
    expect(doublyLinkedList.toString()).toBe('3,2,1');
    expect(doublyLinkedList.insert(4, 1)).toBe(true);
    expect(doublyLinkedList.toString()).toBe('3,4,2,1');
    expect(doublyLinkedList.insert(5, 4)).toBe(true);
    expect(doublyLinkedList.toString()).toBe('3,4,2,1,5');
    expect(doublyLinkedList.insert(6, 6)).toBe(false);
    expect(doublyLinkedList.toString()).toBe('3,4,2,1,5');
  });

  it('test DoublyLinkedList removeAt()', () => {
    doublyLinkedList.push(1);
    doublyLinkedList.push(3);
    doublyLinkedList.push(2);
    doublyLinkedList.push(5);
    doublyLinkedList.push(6);
    doublyLinkedList.push(4);
    expect(doublyLinkedList.toString()).toBe('1,3,2,5,6,4');
    doublyLinkedList.removeAt(-1);
    expect(doublyLinkedList.toString()).toBe('1,3,2,5,6,4');
    doublyLinkedList.removeAt(-6);
    expect(doublyLinkedList.toString()).toBe('1,3,2,5,6,4');
    doublyLinkedList.removeAt(0);
    expect(doublyLinkedList.toString()).toBe('3,2,5,6,4');
    doublyLinkedList.removeAt(4);
    expect(doublyLinkedList.toString()).toBe('3,2,5,6');
    doublyLinkedList.removeAt(1);
    expect(doublyLinkedList.toString()).toBe('3,5,6');
    doublyLinkedList.removeAt(1);
    expect(doublyLinkedList.toString()).toBe('3,6');
    doublyLinkedList.removeAt(0);
    expect(doublyLinkedList.toString()).toBe('6');
    doublyLinkedList.removeAt(0);
    expect(doublyLinkedList.toString()).toBe('');
    doublyLinkedList.removeAt(0);
    expect(doublyLinkedList.toString()).toBe('');
  });

  it('test DoublyLinkedList getTail()', () => {
    expect(doublyLinkedList.getTail()).toBe(null);
    doublyLinkedList.push(1);
    expect(doublyLinkedList.getTail().val).toBe(1);
    doublyLinkedList.push(2);
    doublyLinkedList.push(3);
    expect(doublyLinkedList.getTail().val).toBe(3);
  });

  it('test DoublyLinkedList reverseToString()', () => {
    expect(doublyLinkedList.reverseToString()).toBe('');
    doublyLinkedList.push(1);
    doublyLinkedList.push(3);
    doublyLinkedList.push(2);
    doublyLinkedList.push(5);
    doublyLinkedList.push(6);
    expect(doublyLinkedList.reverseToString()).toBe('6,5,2,3,1');
  });
});