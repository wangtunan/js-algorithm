import ArrayStack from '../arrayStack.js';
let stack = {};

describe('ArrayStack tests', () => {
  beforeEach(() => {
    stack = new ArrayStack();
  });

  it('test ArrayStack push()', () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.getSize()).toBe(3);
    expect(stack.peek()).toBe(3);
  });

  it('test ArrayStack pop()', () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.getSize()).toBe(3);
    expect(stack.peek()).toBe(3);
    stack.pop();
    expect(stack.getSize()).toBe(2);
    expect(stack.peek()).toBe(2);
    stack.pop();
    stack.pop();
    expect(stack.getSize()).toBe(0);
    expect(stack.peek()).toBe(undefined);
  });

  it('test ArrayStack peek()', () => {
    expect(stack.isEmpty()).toBe(true);
    expect(stack.peek()).toBe(undefined);
    stack.push(3);
    expect(stack.peek()).toBe(3);
    stack.push(2);
    stack.push(1);
    expect(stack.peek()).toBe(1);
    stack.pop();
    expect(stack.peek()).toBe(2);
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
    expect(stack.peek()).toBe(undefined);
  });

  it('test ArrayStack isEmpty()', () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.isEmpty()).toBe(false);
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  it('test ArrayStack clear()', () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(3);
    stack.push(2);
    stack.push(1);
    expect(stack.getSize()).toBe(3);
    expect(stack.peek()).toBe(1);
    stack.clear();
    expect(stack.getSize()).toBe(0);
    expect(stack.peek()).toBe(undefined);
  });

  it('test ArrayStack getSize()', () => {
    expect(stack.isEmpty()).toBe(true);
    expect(stack.getSize()).toBe(0);
    stack.push(3);
    stack.push(2);
    stack.push(1);
    expect(stack.getSize()).toBe(3);
    stack.pop();
    expect(stack.getSize()).toBe(2);
    stack.clear();
    expect(stack.getSize()).toBe(0);
  });

  it('test ArrayStack toArray()', () => {
    expect(stack.isEmpty()).toBe(true);
    expect(stack.toArray()).toEqual([]);
    stack.push(3);
    stack.push(2);
    stack.push(1);
    expect(stack.toArray()).toEqual([3, 2, 1]);
    stack.pop();
    expect(stack.toArray()).toEqual([3, 2]);
    stack.clear();
    expect(stack.toArray()).toEqual([]);
    expect(stack.isEmpty()).toBe(true);
  });
});