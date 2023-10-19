import LinkedList from '../linkedList.js';
let linkedList = null;

describe('LinkedList tests', () => {
  beforeEach(() => {
    linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(3);
    linkedList.push(2);
    linkedList.push(5);
    linkedList.push(6);
  });

  it('test LinkedList push()', () => {
    linkedList = new LinkedList();
    expect(linkedList.isEmpty()).toBe(true);
    linkedList.push(1);
    expect(linkedList.toString()).toBe('1');
    linkedList.push(2);
    linkedList.push(3);
    expect(linkedList.toString()).toBe('1,2,3');
    linkedList.push(9);
    expect(linkedList.toString()).toBe('1,2,3,9');
  });

  it('test LinkedList insert()', () => {
    linkedList = new LinkedList();
    expect(linkedList.isEmpty()).toBe(true);
    expect(linkedList.insert(1, -1)).toBe(false);
    expect(linkedList.isEmpty()).toBe(true);
    expect(linkedList.insert(1, 0)).toBe(true);
    expect(linkedList.toString()).toBe('1');
    expect(linkedList.insert(0, 0)).toBe(true);
    expect(linkedList.toString()).toBe('0,1');
    linkedList.push(2);
    linkedList.push(3);
    expect(linkedList.toString()).toBe('0,1,2,3');
    expect(linkedList.insert(11, 2)).toBe(true);
    expect(linkedList.toString()).toBe('0,1,11,2,3');
    expect(linkedList.insert(4, 4)).toBe(true);
    expect(linkedList.toString()).toBe('0,1,11,2,4,3');
    expect(linkedList.insert(5, 6)).toBe(true);
    expect(linkedList.toString()).toBe('0,1,11,2,4,3,5');
    expect(linkedList.insert(7, 8)).toBe(false);
    expect(linkedList.toString()).toBe('0,1,11,2,4,3,5');
  });

  it('test LinkedList remove()', () => {
    expect(linkedList.toString()).toBe('1,3,2,5,6');
    linkedList.remove(-1);
    expect(linkedList.toString()).toBe('1,3,2,5,6');
    linkedList.remove(1);
    expect(linkedList.toString()).toBe('3,2,5,6');
    linkedList.remove(2);
    expect(linkedList.toString()).toBe('3,5,6');
    linkedList.remove(6);
    expect(linkedList.toString()).toBe('3,5');
    linkedList.remove(5);
    expect(linkedList.toString()).toBe('3');
    linkedList.remove(4);
    expect(linkedList.toString()).toBe('3');
    linkedList.remove(3);
    expect(linkedList.toString()).toBe('');
  });

  it('test LinkedList removeAt()', () => {
    expect(linkedList.toString()).toBe('1,3,2,5,6');
    linkedList.removeAt(-1);
    expect(linkedList.toString()).toBe('1,3,2,5,6');
    linkedList.removeAt(0);
    expect(linkedList.toString()).toBe('3,2,5,6');
    linkedList.removeAt(1);
    expect(linkedList.toString()).toBe('3,5,6');
    linkedList.removeAt(2);
    expect(linkedList.toString()).toBe('3,5');
    linkedList.removeAt(1);
    expect(linkedList.toString()).toBe('3');
    linkedList.removeAt(2);
    expect(linkedList.toString()).toBe('3');
  });

  it('test LinkedList getNodeAt()', () => {
    expect(linkedList.getNodeAt(-1)).toBe(null);
    expect(linkedList.getNodeAt(0).val).toBe(1);
    expect(linkedList.getNodeAt(2).val).toBe(2);
    expect(linkedList.getNodeAt(4).val).toBe(6);
    expect(linkedList.getNodeAt(5)).toBe(null);
  });

  it('test LinkedList getSize()', () => {
    expect(linkedList.getSize()).toBe(5);
    linkedList = new LinkedList();
    expect(linkedList.getSize()).toBe(0);
    linkedList.push(1);
    expect(linkedList.getSize()).toBe(1);
    linkedList.push(2);
    linkedList.push(3);
    expect(linkedList.getSize()).toBe(3);
  });

  it('test LinkedList getHead()', () => {
    expect(linkedList.getHead().val).toBe(1);
    linkedList = new LinkedList();
    expect(linkedList.getHead()).toBe(null);
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    expect(linkedList.getHead().val).toBe(1);
  });

  it('test LinkedList isEmpty()', () => {
    expect(linkedList.isEmpty()).toBe(false);
    linkedList = new LinkedList();
    expect(linkedList.isEmpty()).toBe(true);
    linkedList.push(1);
    expect(linkedList.isEmpty()).toBe(false);
    linkedList.push(2);
    linkedList.push(3);
    expect(linkedList.isEmpty()).toBe(false);
  });

  it('test LinkedList indexOf()', () => {
    expect(linkedList.indexOf(1)).toBe(0);
    expect(linkedList.indexOf(2)).toBe(2);
    expect(linkedList.indexOf(4)).toBe(-1);
    expect(linkedList.indexOf(6)).toBe(4);
    expect(linkedList.indexOf(10)).toBe(-1);
  });

  it('test LinkedList toString()', () => {
    expect(linkedList.toString()).toBe('1,3,2,5,6');
  });

  it('test LinkedList _isSafeIndex()', () => {
    expect(linkedList._isSafeIndex(-1)).toBe(false);
    expect(linkedList._isSafeIndex(0)).toBe(true);
    expect(linkedList._isSafeIndex(2)).toBe(true);
    expect(linkedList._isSafeIndex(4)).toBe(true);
    expect(linkedList._isSafeIndex(5)).toBe(false);
    expect(linkedList._isSafeIndex(5, true)).toBe(true);
  });
});