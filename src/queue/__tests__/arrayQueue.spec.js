import ArrayQueue from '../arrayQueue.js';

const capacity = 5;
let queue = {};

describe('ArrayQueue tests', () => {
  beforeEach(() => {
    queue = new ArrayQueue(capacity);
  });

  it('test ArrayQueue push()', () => {
    expect(queue.isEmpty()).toBe(true);

    queue.push(1);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.getSize()).toBe(1);
    expect(queue.toArray()).toEqual([1]);

    queue.push(2);
    queue.push(3);
    queue.push(4);
    queue.push(5);
    queue.push(6);
    expect(queue.getSize()).toBe(5);
    expect(queue.toArray()).toEqual([1, 2, 3, 4, 5]);
  });

  it('test ArrayQueue pop()', () => {
    expect(queue.isEmpty()).toBe(true);

    queue.push(1);
    queue.push(2);
    queue.push(3);
    queue.push(4);
    expect(queue.getSize()).toBe(4);
    expect(queue.toArray()).toEqual([1, 2, 3, 4]);

    expect(queue.pop()).toBe(1);
    expect(queue.getSize()).toBe(3);
    expect(queue.toArray()).toEqual([2, 3, 4]);

    expect(queue.pop()).toBe(2);
    expect(queue.pop()).toBe(3);
    expect(queue.pop()).toBe(4);
    expect(queue.getSize()).toBe(0);
    expect(queue.toArray()).toEqual([]);

    expect(queue.pop()).toBe(undefined);
    expect(queue.toArray()).toEqual([]);
  });

  it('test ArrayQueue peek()', () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.peek()).toBe(undefined);
    
    queue.push(1);
    expect(queue.peek()).toBe(1);

    queue.push(2);
    queue.push(3);
    queue.pop();
    expect(queue.peek()).toBe(2);
    expect(queue.toArray()).toEqual([2, 3]);

    queue.pop();
    queue.pop();
    expect(queue.isEmpty()).toBe(true);
    expect(queue.peek()).toBe(undefined);
  });

  it('test ArrayQueue isEmpty()', () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.getSize()).toBe(0);

    queue.push(1);
    queue.push(2);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.getSize()).toBe(2);

    queue.pop(1);
    queue.pop(2);
    expect(queue.isEmpty()).toBe(true);
    expect(queue.getSize()).toBe(0);
  });

  it('test ArrayQueue clear()', () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.getSize()).toBe(0);
    expect(queue.toArray()).toEqual([]);

    queue.push(1);
    queue.push(2);
    queue.push(3);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.getSize()).toBe(3);
    expect(queue.toArray()).toEqual([1, 2, 3]);
    
    queue.clear();
    expect(queue.isEmpty()).toBe(true);
    expect(queue.getSize()).toBe(0);
    expect(queue.toArray()).toEqual([]);
  });

  it('test ArrayQueue getSize()', () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.getSize()).toBe(0);

    queue.push(1);
    queue.push(2);
    expect(queue.getSize()).toBe(2);

    queue.pop();
    expect(queue.getSize()).toBe(1);

    queue.push(3);
    queue.push(4);
    queue.push(5);
    expect(queue.getSize()).toBe(4);
  });

  it('test ArrayQueue toArray()', () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.toArray()).toEqual([]);

    queue.push(1);
    queue.push(2);
    queue.push(3);
    expect(queue.toArray()).toEqual([1, 2, 3]);

    queue.pop();
    queue.push(4);
    expect(queue.toArray()).toEqual([2, 3, 4]);

    queue.pop();
    queue.pop();
    queue.pop();
    expect(queue.isEmpty()).toBe(true);
    expect(queue.toArray()).toEqual([]);
  });

  it('test ArrayQueue _getQueueIndex()', () => {
    expect(queue._getQueueIndex(0)).toBe(0);
    expect(queue._getQueueIndex(2)).toBe(2);
    expect(queue._getQueueIndex(4)).toBe(4);
    expect(queue._getQueueIndex(5)).toBe(0);
    expect(queue._getQueueIndex(6)).toBe(1);
    expect(queue._getQueueIndex(7)).toBe(2);
  });

  it('test ArrayQueue _initQueue()', () => {
    expect(queue._items.length).toBe(capacity);
    expect(queue._front).toBe(0);
    expect(queue._size).toBe(0);

    queue = new ArrayQueue(capacity);
    queue._items = new Array(capacity).fill(0);
    queue._front = 1;
    queue._size = 5;
    queue._initQueue();

    expect(queue._items.length).toBe(capacity);
    expect(queue._front).toBe(0);
    expect(queue._size).toBe(0);
  });
});