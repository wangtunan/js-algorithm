import ArrayDequeue from '../arrayDequeue.js';

const capacity = 5;
let dequeue = {};

describe('ArrayDequeue tests', () => {
  beforeEach(() => {
    dequeue = new ArrayDequeue(capacity);
  });

  it('test ArrayDequeue pushFirst()', () => {
    expect(dequeue.isEmpty()).toBe(true);
    expect(dequeue.toArray()).toEqual([]);

    dequeue.pushFirst(1);
    expect(dequeue.getSize()).toBe(1);
    expect(dequeue.toArray()).toEqual([1]);

    dequeue.pushFirst(2);
    dequeue.pushFirst(3);
    dequeue.pushFirst(4);
    dequeue.pushFirst(5);
    dequeue.pushFirst(6);
    expect(dequeue.getSize()).toBe(5);
    expect(dequeue.toArray()).toEqual([5, 4, 3, 2, 1]);
  });

  it('test ArrayDequeue pushLast()', () => {
    expect(dequeue.isEmpty()).toBe(true);
    expect(dequeue.toArray()).toEqual([]);

    dequeue.pushLast(1);
    expect(dequeue.getSize()).toBe(1);
    expect(dequeue.toArray()).toEqual([1]);

    dequeue.pushLast(2);
    dequeue.pushLast(3);
    dequeue.pushLast(4);
    dequeue.pushLast(5);
    dequeue.pushLast(6);
    expect(dequeue.getSize()).toBe(5);
    expect(dequeue.toArray()).toEqual([1, 2, 3, 4, 5]);
  });

  it('test ArrayDequeue popFirst()', () => {
    expect(dequeue.isEmpty()).toBe(true);
    expect(dequeue.toArray()).toEqual([]);

    dequeue.pushLast(1);
    dequeue.pushLast(2);
    dequeue.pushLast(3);
    expect(dequeue.getSize()).toBe(3);
    expect(dequeue.toArray()).toEqual([1, 2, 3]);

    expect(dequeue.popFirst()).toBe(1);
    expect(dequeue.getSize()).toBe(2);
    expect(dequeue.toArray()).toEqual([2, 3]);

    expect(dequeue.popFirst()).toBe(2);
    expect(dequeue.popFirst()).toBe(3);
    expect(dequeue.popFirst()).toBe(undefined);
    expect(dequeue.getSize()).toBe(0);
    expect(dequeue.toArray()).toEqual([]);
  });

  it('test ArrayDequeue popLast()', () => {
    expect(dequeue.isEmpty()).toBe(true);
    expect(dequeue.toArray()).toEqual([]);

    dequeue.pushLast(1);
    dequeue.pushLast(2);
    dequeue.pushLast(3);
    expect(dequeue.getSize()).toBe(3);
    expect(dequeue.toArray()).toEqual([1, 2, 3]);

    expect(dequeue.popLast()).toBe(3);
    expect(dequeue.getSize()).toBe(2);
    expect(dequeue.toArray()).toEqual([1, 2]);

    expect(dequeue.popLast()).toBe(2);
    expect(dequeue.popLast()).toBe(1);
    expect(dequeue.popLast()).toBe(undefined);
    expect(dequeue.getSize()).toBe(0);
    expect(dequeue.toArray()).toEqual([]);
  });

  it('test ArrayDequeue peekFirst()', () => {
    expect(dequeue.isEmpty()).toBe(true);
    expect(dequeue.peekFirst()).toBe(undefined);
    expect(dequeue.toArray()).toEqual([]);

    dequeue.pushLast(1);
    expect(dequeue.peekFirst()).toBe(1);
    expect(dequeue.getSize()).toBe(1);
    expect(dequeue.toArray()).toEqual([1]);

    dequeue.pushLast(2);
    dequeue.pushLast(3);
    expect(dequeue.peekFirst()).toBe(1);
    expect(dequeue.getSize()).toBe(3);
    expect(dequeue.toArray()).toEqual([1, 2, 3]);
  });

  it('test ArrayDequeue peekLast()', () => {
    expect(dequeue.isEmpty()).toBe(true);
    expect(dequeue.peekLast()).toBe(undefined);
    expect(dequeue.toArray()).toEqual([]);

    dequeue.pushLast(1);
    expect(dequeue.peekLast()).toBe(1);
    expect(dequeue.getSize()).toBe(1);
    expect(dequeue.toArray()).toEqual([1]);

    dequeue.pushLast(2);
    dequeue.pushLast(3);
    expect(dequeue.peekLast()).toBe(3);
    expect(dequeue.getSize()).toBe(3);
    expect(dequeue.toArray()).toEqual([1, 2, 3]);
  });

  it('test ArrayDequeue isEmpty()', () => {
    expect(dequeue.isEmpty()).toBe(true);
    expect(dequeue.getSize()).toBe(0);

    dequeue.pushLast(1);
    dequeue.pushLast(2);
    expect(dequeue.isEmpty()).toBe(false);
    expect(dequeue.getSize()).toBe(2);

    dequeue.popLast(1);
    dequeue.popLast(2);
    expect(dequeue.isEmpty()).toBe(true);
    expect(dequeue.getSize()).toBe(0);
  });

  it('test ArrayDequeue clear()', () => {
    expect(dequeue.isEmpty()).toBe(true);
    expect(dequeue.getSize()).toBe(0);
    expect(dequeue.toArray()).toEqual([]);

    dequeue.pushLast(1);
    dequeue.pushLast(2);
    dequeue.pushLast(3);
    expect(dequeue.isEmpty()).toBe(false);
    expect(dequeue.getSize()).toBe(3);
    expect(dequeue.toArray()).toEqual([1, 2, 3]);
    
    dequeue.clear();
    expect(dequeue.isEmpty()).toBe(true);
    expect(dequeue.getSize()).toBe(0);
    expect(dequeue.toArray()).toEqual([]);
  });

  it('test ArrayDequeue getSize()', () => {
    expect(dequeue.isEmpty()).toBe(true);
    expect(dequeue.getSize()).toBe(0);

    dequeue.pushLast(1);
    dequeue.pushLast(2);
    expect(dequeue.getSize()).toBe(2);

    dequeue.popLast();
    expect(dequeue.getSize()).toBe(1);

    dequeue.pushLast(3);
    dequeue.pushLast(4);
    dequeue.pushLast(5);
    expect(dequeue.getSize()).toBe(4);
  });

  it('test ArrayDequeue toArray()', () => {
    expect(dequeue.isEmpty()).toBe(true);
    expect(dequeue.toArray()).toEqual([]);

    dequeue.pushLast(1);
    dequeue.pushLast(2);
    dequeue.pushLast(3);
    expect(dequeue.toArray()).toEqual([1, 2, 3]);

    dequeue.popLast();
    dequeue.pushFirst(4);
    expect(dequeue.toArray()).toEqual([4, 1, 2]);

    dequeue.popLast();
    dequeue.popLast();
    dequeue.popLast();
    expect(dequeue.isEmpty()).toBe(true);
    expect(dequeue.toArray()).toEqual([]);
  });

  it('test ArrayDequeue _initDequeue()', () => {
    expect(dequeue._items.length).toBe(capacity);
    expect(dequeue._front).toBe(0);
    expect(dequeue._size).toBe(0);

    dequeue = new ArrayDequeue(capacity);
    dequeue._items = new Array(capacity).fill(0);
    dequeue._front = 1;
    dequeue._size = 5;
    dequeue._initDequeue();

    expect(dequeue._items.length).toBe(capacity);
    expect(dequeue._front).toBe(0);
    expect(dequeue._size).toBe(0);
  });

  it('test ArrayDequeue _getDequeueIndex()', () => {
    expect(dequeue._capacity).toBe(capacity);

    expect(dequeue._getDequeueIndex(0)).toBe(0);
    expect(dequeue._getDequeueIndex(2)).toBe(2);
    expect(dequeue._getDequeueIndex(4)).toBe(4);
    expect(dequeue._getDequeueIndex(5)).toBe(0);
    expect(dequeue._getDequeueIndex(6)).toBe(1);
    expect(dequeue._getDequeueIndex(7)).toBe(2);
    
    expect(dequeue._getDequeueIndex(0)).toBe(0);
    expect(dequeue._getDequeueIndex(-1)).toBe(4);
    expect(dequeue._getDequeueIndex(-2)).toBe(3);
    expect(dequeue._getDequeueIndex(-5)).toBe(0);
  });
});