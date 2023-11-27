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

    // 测试在索引第一位插入
    expect(linkedList.insert(1, 0)).toBe(true);
    expect(linkedList.toString()).toBe('1');
    expect(linkedList.insert(0, 0)).toBe(true);
    expect(linkedList.toString()).toBe('0,1');

    linkedList.push(2);
    linkedList.push(3);
    expect(linkedList.toString()).toBe('0,1,2,3');

    // 测试在正常索引插入
    expect(linkedList.insert(4, 2)).toBe(true);
    expect(linkedList.toString()).toBe('0,1,4,2,3');
    expect(linkedList.insert(4, 4)).toBe(true);
    expect(linkedList.toString()).toBe('0,1,4,2,4,3');
    expect(linkedList.insert(5, 6)).toBe(true);
    expect(linkedList.toString()).toBe('0,1,4,2,4,3,5');

    // 测试在非法索引位置插入
    expect(linkedList.insert(1, -1)).toBe(false);
    expect(linkedList.toString()).toBe('0,1,4,2,4,3,5');
    expect(linkedList.insert(7, 8)).toBe(false);
    expect(linkedList.toString()).toBe('0,1,4,2,4,3,5');
  });

  it('test LinkedList remove()', () => {
    expect(linkedList.toString()).toBe('1,3,2,5,6');

    // 测试移除不合法值
    linkedList.remove(-1);
    expect(linkedList.toString()).toBe('1,3,2,5,6');
    linkedList.remove(7);
    expect(linkedList.toString()).toBe('1,3,2,5,6');

    // 测试移除合法值
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

    // 测试在非法索引位置移除
    linkedList.removeAt(-1);
    expect(linkedList.toString()).toBe('1,3,2,5,6');
    linkedList.removeAt(5);
    expect(linkedList.toString()).toBe('1,3,2,5,6');

    // 测试在索引第一位移除
    linkedList.removeAt(0);
    expect(linkedList.toString()).toBe('3,2,5,6');
    linkedList.removeAt(0);
    expect(linkedList.toString()).toBe('2,5,6');

    // 测试在正常索引位置移除
    linkedList.removeAt(1);
    expect(linkedList.toString()).toBe('2,6');
    linkedList.removeAt(1);
    expect(linkedList.toString()).toBe('2');
  });

  it('test LinkedList getNodeAt()', () => {
    // 测试合法值
    expect(linkedList.getNodeAt(0).val).toBe(1);
    expect(linkedList.getNodeAt(2).val).toBe(2);
    expect(linkedList.getNodeAt(4).val).toBe(6);

    // 测试异常值
    expect(linkedList.getNodeAt(-1)).toBe(null);
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
    // 测试正常索引
    expect(linkedList.indexOf(1)).toBe(0);
    expect(linkedList.indexOf(2)).toBe(2);
    expect(linkedList.indexOf(6)).toBe(4);

    // 测试异常索引
    expect(linkedList.indexOf(10)).toBe(-1);
    expect(linkedList.indexOf(4)).toBe(-1);
  });

  it('test LinkedList toString()', () => {
    expect(linkedList.toString()).toBe('1,3,2,5,6');
  });

  it('test LinkedList _isSafeIndex()', () => {
    // 测试安全合法索引
    expect(linkedList._isSafeIndex(0)).toBe(true);
    expect(linkedList._isSafeIndex(2)).toBe(true);
    expect(linkedList._isSafeIndex(4)).toBe(true);
    expect(linkedList._isSafeIndex(5, true)).toBe(true);

    // 测试不安全合法索引
    expect(linkedList._isSafeIndex(-1)).toBe(false);
    expect(linkedList._isSafeIndex(5)).toBe(false);
  });
});