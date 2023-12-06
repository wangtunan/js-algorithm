import ArrayBinaryTree from '../arrayBinaryTree.js';

let tree = {};

describe('ArrayBinaryTree tests', () => {
  beforeEach(() => {
    tree = new ArrayBinaryTree([]);
  });

  it('test ArrayBinaryTree levelOrder()', () => {
    expect(tree.levelOrder()).toEqual([]);
    expect(tree.size()).toBe(0);

    tree = new ArrayBinaryTree([1, 2, 3, null, 5]);
    expect(tree.levelOrder()).toEqual([1, 2, 3, 5]);
    expect(tree.size()).toBe(5);

    tree = new ArrayBinaryTree([1, 2, 3, 4, 5]);
    expect(tree.levelOrder()).toEqual([1, 2, 3, 4, 5]);
    expect(tree.size()).toBe(5);
  });

  it('test ArrayBinaryTree preOrder()', () => {
    expect(tree.preOrder()).toEqual([]);
    expect(tree.size()).toBe(0);

    tree = new ArrayBinaryTree([1]);
    expect(tree.preOrder()).toEqual([1]);
    expect(tree.size()).toBe(1);

    tree = new ArrayBinaryTree([1, 2, 3]);
    expect(tree.preOrder()).toEqual([1, 2, 3]);
    expect(tree.size()).toBe(3);

    tree = new ArrayBinaryTree([1, 2, null, 3, 4]);
    expect(tree.preOrder()).toEqual([1, 2, 3, 4]);
    expect(tree.size()).toBe(5);

    tree = new ArrayBinaryTree([1, 2, 3, null, 4]);
    expect(tree.preOrder()).toEqual([1, 2, 4, 3]);
    expect(tree.size()).toBe(5);
  });

  it('test ArrayBinaryTree inOrder()', () => {
    expect(tree.inOrder()).toEqual([]);
    expect(tree.size()).toBe(0);

    tree = new ArrayBinaryTree([1]);
    expect(tree.inOrder()).toEqual([1]);
    expect(tree.size()).toBe(1);

    tree = new ArrayBinaryTree([1, 2, 3]);
    expect(tree.inOrder()).toEqual([2, 1, 3]);
    expect(tree.size()).toBe(3);

    tree = new ArrayBinaryTree([1, 2, null, 3, 4]);
    expect(tree.inOrder()).toEqual([3, 2, 4, 1]);
    expect(tree.size()).toBe(5);

    tree = new ArrayBinaryTree([1, 2, 3, null, 4]);
    expect(tree.inOrder()).toEqual([2, 4, 1, 3]);
    expect(tree.size()).toBe(5);
  });

  it('test ArrayBinaryTree postOrder()', () => {
    expect(tree.postOrder()).toEqual([]);
    expect(tree.size()).toBe(0);

    tree = new ArrayBinaryTree([1]);
    expect(tree.postOrder()).toEqual([1]);
    expect(tree.size()).toBe(1);

    tree = new ArrayBinaryTree([1, 2, 3]);
    expect(tree.postOrder()).toEqual([2, 3, 1]);
    expect(tree.size()).toBe(3);

    tree = new ArrayBinaryTree([1, 2, null, 3, 4]);
    expect(tree.postOrder()).toEqual([3, 4, 2, 1]);
    expect(tree.size()).toBe(5);

    tree = new ArrayBinaryTree([1, 2, 3, null, 4]);
    expect(tree.postOrder()).toEqual([4, 2, 3, 1]);
    expect(tree.size()).toBe(5);
  });

  it('test ArrayBinaryTree size()', () => {
    expect(tree.size()).toBe(0);

    tree = new ArrayBinaryTree([null]);
    expect(tree.size()).toBe(1);

    tree = new ArrayBinaryTree([null, null, null]);
    expect(tree.size()).toBe(3);

    tree = new ArrayBinaryTree([1, null, 3]);
    expect(tree.size()).toBe(3);
    
    tree = new ArrayBinaryTree([1, 2, 3, 4, 5]);
    expect(tree.size()).toBe(5);
  });

  it('test ArrayBinaryTree val()', () => {
    expect(tree.size()).toBe(0);
    expect(tree.val(0)).toBe(null);
    expect(tree.val(-1)).toBe(null);
    expect(tree.val(1)).toBe(null);

    tree = new ArrayBinaryTree([1, 2, null, 3, 4]);
    expect(tree.val(0)).toBe(1);
    expect(tree.val(2)).toBe(null);
    expect(tree.val(4)).toBe(4);
    expect(tree.val(5)).toBe(null);
  });

  it('test ArrayBinaryTree left()', () => {
    expect(tree.size()).toBe(0);
    
    expect(tree.left(0)).toBe(1);
    expect(tree.left(1)).toBe(3);
    expect(tree.left(2)).toBe(5);
    expect(tree.left(3)).toBe(7);
  });
  it('test ArrayBinaryTree right()', () => {
    expect(tree.size()).toBe(0);
    
    expect(tree.right(0)).toBe(2);
    expect(tree.right(1)).toBe(4);
    expect(tree.right(2)).toBe(6);
    expect(tree.right(3)).toBe(8);
  });

  it('test ArrayBinaryTree parent()', () => {
    expect(tree.size()).toBe(0);
    
    expect(tree.parent(0)).toBe(-1);

    expect(tree.parent(1)).toBe(0);
    expect(tree.parent(2)).toBe(0);
    expect(tree.parent(3)).toBe(1);
    expect(tree.parent(4)).toBe(1);
    expect(tree.parent(5)).toBe(2);
    expect(tree.parent(6)).toBe(2);
  });
});