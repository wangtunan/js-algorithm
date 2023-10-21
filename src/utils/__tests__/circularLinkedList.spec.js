import CircularLinkedList from '../circularLinkedList.js';

let circularLinkedList = null;

describe('CircularLinkedList tests', () => {
  beforeEach(() => {
    circularLinkedList = new CircularLinkedList();
  });

  it('test CircularLinkedList push()', () => {
    expect(circularLinkedList.isEmpty()).toBe(true);

    circularLinkedList.push(1);
    expect(circularLinkedList.toString()).toBe('1');
    circularLinkedList.push(2);
    circularLinkedList.push(3);
    expect(circularLinkedList.toString()).toBe('1,2,3');
    circularLinkedList.push(9);
    expect(circularLinkedList.toString()).toBe('1,2,3,9');
  });

  it('test CircularLinkedList insert()', () => {
    expect(circularLinkedList.isEmpty()).toBe(true);

    // 测试在第一位插入
    expect(circularLinkedList.insert(1, 0)).toBe(true);
    expect(circularLinkedList.toString()).toBe('1');
    expect(circularLinkedList.insert(2, 0)).toBe(true);
    expect(circularLinkedList.toString()).toBe('2,1');

    // 测试插入非法索引
    expect(circularLinkedList.insert(3, -1)).toBe(false);
    expect(circularLinkedList.toString()).toBe('2,1');
    expect(circularLinkedList.insert(3, 4)).toBe(false);
    expect(circularLinkedList.toString()).toBe('2,1');

    
    // 测试非第一位插入
    expect(circularLinkedList.insert(3, 2)).toBe(true);
    expect(circularLinkedList.toString()).toBe('2,1,3');
    expect(circularLinkedList.insert(4, 2)).toBe(true);
    expect(circularLinkedList.toString()).toBe('2,1,4,3');
  });

  it('test CircularLinkedList removeAt()', () => {
    circularLinkedList.push(1);
    circularLinkedList.push(2);
    expect(circularLinkedList.toString()).toBe('1,2');

    // 测试在非法索引移除
    circularLinkedList.removeAt(-1);
    expect(circularLinkedList.toString()).toBe('1,2');
    circularLinkedList.removeAt(2);
    expect(circularLinkedList.toString()).toBe('1,2');

    // 测试移除第一位
    circularLinkedList.removeAt(0);
    expect(circularLinkedList.toString()).toBe('2');
    circularLinkedList.removeAt(0);
    expect(circularLinkedList.toString()).toBe('');

    circularLinkedList.push(1);
    circularLinkedList.push(2);
    circularLinkedList.push(3);
    expect(circularLinkedList.toString()).toBe('1,2,3');

    // 测试在移除非第一位
    circularLinkedList.removeAt(1);
    expect(circularLinkedList.toString()).toBe('1,3');
    circularLinkedList.removeAt(1);
    expect(circularLinkedList.toString()).toBe('1');
  });
});