import LinkedListQueue from '../linkedListQueue.js';

let queue = {};

describe('LinkedListQueue tests', () => {
  beforeEach(() => {
    queue = new LinkedListQueue();
  });

  it('test LinkedListQueue push()', () => {
    expect(queue.isEmpty()).toBe(true);

    queue.push(1);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.getSize()).toBe(1);
    expect(queue.toArray()).toEqual([1]);

    queue.push(2);
    queue.push(3);
    queue.push(4);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.getSize()).toBe(4);
    expect(queue.toArray()).toEqual([1, 2, 3, 4]);
  });

  it('test LinkedListQueue pop()', () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.pop()).toBe(undefined);
    expect(queue.getSize()).toBe(0);

    queue.push(1);
    queue.push(2);
    queue.push(3);
    expect(queue.getSize()).toBe(3);
    expect(queue.toArray()).toEqual([1, 2, 3]);

    expect(queue.pop()).toBe(1);
    expect(queue.getSize()).toBe(2);
    expect(queue.toArray()).toEqual([2, 3]);

    expect(queue.pop()).toBe(2);
    expect(queue.pop()).toBe(3);
    expect(queue.pop()).toBe(undefined);
    expect(queue.isEmpty()).toBe(true);
    expect(queue.getSize()).toBe(0);
    expect(queue.toArray()).toEqual([]);
  });

  it('test LinkedListQueue peek()', () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.peek()).toBe(undefined);

    queue.push(1);
    queue.push(2);
    expect(queue.peek()).toBe(1);

    queue.pop();
    expect(queue.peek()).toBe(2);

    queue.pop();
    expect(queue.peek()).toBe(undefined);
  });

  it('test LinkedListQueue isEmpty()', () => {
    expect(queue.isEmpty()).toBe(true);

    queue.push(1);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.getSize()).toBe(1);

    queue.push(2);
    queue.push(3);
    queue.pop();
    expect(queue.isEmpty()).toBe(false);
    expect(queue.getSize()).toBe(2);
    
    queue.pop();
    queue.pop();
    expect(queue.isEmpty()).toBe(true);
    expect(queue.getSize()).toBe(0);
  });

  it('test LinkedListQueue clear()', () => {
    expect(queue.isEmpty()).toBe(true);

    queue.push(1);
    queue.push(2);
    queue.push(3);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.getSize()).toBe(3);
    
    queue.clear();
    expect(queue.isEmpty()).toBe(true);
    expect(queue.getSize()).toBe(0);
  });

  it('test LinkedListQueue getSize()', () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.getSize()).toBe(0);

    queue.push(1);
    expect(queue.getSize()).toBe(1);

    queue.push(2);
    queue.push(3);
    queue.pop();
    expect(queue.getSize()).toBe(2);
    
    queue.pop();
    queue.pop();
    expect(queue.getSize()).toBe(0);
  });

  it('test LinkedListQueue toArray()', () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.toArray()).toEqual([]);

    queue.push(1);
    queue.push(2);
    queue.push(3);
    expect(queue.getSize()).toBe(3);
    expect(queue.toArray()).toEqual([1, 2, 3]);

    queue.pop();
    queue.push(4);
    expect(queue.getSize()).toBe(3);
    expect(queue.toArray()).toEqual([2, 3, 4]);

    queue.clear();
    expect(queue.isEmpty()).toBe(true);
    expect(queue.getSize()).toBe(0);
    expect(queue.toArray()).toEqual([]);
  });
});