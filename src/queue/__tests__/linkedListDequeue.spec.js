import LinkedListDequeue from '../linkedListDequeue.js';

let dequeue = {};

describe('LinkedListDequeue tests', () => {
  beforeEach(() => {
    dequeue = new LinkedListDequeue();
  });

  it('test LinkedListDequeue pushFirst()', () => {
    expect(dequeue.isEmpty()).toBe(true);

    dequeue.pushFirst(1);
    expect(dequeue.isEmpty()).toBe(false);
    expect(dequeue.getSize()).toBe(1);
    expect(dequeue.toArray()).toEqual([1]);

    dequeue.pushFirst(2);
    dequeue.pushFirst(3);
    dequeue.pushFirst(4);
    expect(dequeue.isEmpty()).toBe(false);
    expect(dequeue.getSize()).toBe(4);
    expect(dequeue.toArray()).toEqual([4, 3, 2, 1]);
  });

  it('test LinkedListDequeue pushLast()', () => {
    expect(dequeue.isEmpty()).toBe(true);

    dequeue.pushLast(1);
    expect(dequeue.isEmpty()).toBe(false);
    expect(dequeue.getSize()).toBe(1);
    expect(dequeue.toArray()).toEqual([1]);

    dequeue.pushLast(2);
    dequeue.pushLast(3);
    dequeue.pushLast(4);
    expect(dequeue.isEmpty()).toBe(false);
    expect(dequeue.getSize()).toBe(4);
    expect(dequeue.toArray()).toEqual([1, 2, 3, 4]);
  });

  it('test LinkedListDequeue popFirst()', () => {
    expect(dequeue.isEmpty()).toBe(true);

    dequeue.pushFirst(1);
    dequeue.pushFirst(2);
    dequeue.pushFirst(3);
    expect(dequeue.getSize()).toBe(3);
    expect(dequeue.toArray()).toEqual([3, 2, 1]);

    expect(dequeue.popFirst()).toBe(3);
    expect(dequeue.getSize()).toBe(2);
    expect(dequeue.toArray()).toEqual([2, 1]);

    expect(dequeue.popFirst()).toBe(2);
    expect(dequeue.popFirst()).toBe(1);
    expect(dequeue.getSize()).toBe(0);
    expect(dequeue.toArray()).toEqual([]);
    
    expect(dequeue.popFirst()).toBe(undefined);
    expect(dequeue.toArray()).toEqual([]);
  });

  it('test LinkedListDequeue popLast()', () => {
    expect(dequeue.isEmpty()).toBe(true);

    dequeue.pushFirst(1);
    dequeue.pushFirst(2);
    dequeue.pushFirst(3);
    expect(dequeue.getSize()).toBe(3);
    expect(dequeue.toArray()).toEqual([3, 2, 1]);

    expect(dequeue.popLast()).toBe(1);
    expect(dequeue.getSize()).toBe(2);
    expect(dequeue.toArray()).toEqual([3, 2]);

    expect(dequeue.popLast()).toBe(2);
    expect(dequeue.popLast()).toBe(3);
    expect(dequeue.getSize()).toBe(0);
    expect(dequeue.toArray()).toEqual([]);
    
    expect(dequeue.popLast()).toBe(undefined);
    expect(dequeue.toArray()).toEqual([]);
  });

  it('test LinkedListDequeue peekFirst()', () => {
    expect(dequeue.isEmpty()).toBe(true);
    expect(dequeue.peekFirst()).toBe(undefined);

    dequeue.pushFirst(1);
    expect(dequeue.peekFirst()).toBe(1);
    expect(dequeue.toArray()).toEqual([1]);

    dequeue.pushFirst(2);
    dequeue.pushFirst(3);
    expect(dequeue.peekFirst()).toBe(3);
    expect(dequeue.toArray()).toEqual([3, 2, 1]);
  });

  it('test LinkedListDequeue peekLast()', () => {
    expect(dequeue.isEmpty()).toBe(true);
    expect(dequeue.peekLast()).toBe(undefined);

    dequeue.pushFirst(1);
    expect(dequeue.peekLast()).toBe(1);
    expect(dequeue.toArray()).toEqual([1]);

    dequeue.pushFirst(2);
    dequeue.pushFirst(3);
    expect(dequeue.peekLast()).toBe(1);
    expect(dequeue.toArray()).toEqual([3, 2, 1]);
  });

  it('test LinkedListDequeue isEmpty()', () => {
    expect(dequeue.isEmpty()).toBe(true);

    dequeue.pushFirst(1);
    expect(dequeue.isEmpty()).toBe(false);
    expect(dequeue.getSize()).toBe(1);

    dequeue.pushFirst(2);
    dequeue.pushFirst(3);
    expect(dequeue.isEmpty()).toBe(false);
    expect(dequeue.getSize()).toBe(3);
    
    dequeue.popFirst();
    dequeue.popFirst();
    dequeue.popFirst();
    expect(dequeue.isEmpty()).toBe(true);
    expect(dequeue.getSize()).toBe(0);
  });

  it('test LinkedListDequeue clear()', () => {
    expect(dequeue.isEmpty()).toBe(true);

    dequeue.pushLast(1);
    dequeue.pushLast(2);
    dequeue.pushLast(3);
    expect(dequeue.isEmpty()).toBe(false);
    expect(dequeue.getSize()).toBe(3);
    
    dequeue.clear();
    expect(dequeue.isEmpty()).toBe(true);
    expect(dequeue.getSize()).toBe(0);
  });

  it('test LinkedListDequeue getSize()', () => {
    expect(dequeue.isEmpty()).toBe(true);
    expect(dequeue.getSize()).toBe(0);

    dequeue.pushLast(1);
    expect(dequeue.getSize()).toBe(1);

    dequeue.pushLast(2);
    dequeue.pushLast(3);
    expect(dequeue.getSize()).toBe(3);
    
    dequeue.popLast();
    dequeue.popLast();
    dequeue.popLast();
    expect(dequeue.getSize()).toBe(0);
  });

  it('test LinkedListDequeue toArray()', () => {
    expect(dequeue.isEmpty()).toBe(true);
    expect(dequeue.toArray()).toEqual([]);

    dequeue.pushLast(1);
    dequeue.pushLast(2);
    dequeue.pushLast(3);
    expect(dequeue.getSize()).toBe(3);
    expect(dequeue.toArray()).toEqual([1, 2, 3]);

    dequeue.popLast();
    dequeue.pushFirst(4);
    expect(dequeue.getSize()).toBe(3);
    expect(dequeue.toArray()).toEqual([4, 1, 2]);

    dequeue.clear();
    expect(dequeue.isEmpty()).toBe(true);
    expect(dequeue.getSize()).toBe(0);
    expect(dequeue.toArray()).toEqual([]);
  });
});