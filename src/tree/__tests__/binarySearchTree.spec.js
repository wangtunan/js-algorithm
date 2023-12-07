import BinarySearchTree from '../binarySearchTree.js';

const list = [8, 4, 12, 2, 6, 10, 14];
let tree = {};

describe('BinarySearchTree tests()', () => {
  beforeEach(() => {
    tree = new BinarySearchTree();
    list.forEach(item => {
      tree.insert(item);
    });
  });

  it('test BinarySearchTree search()', () => {
    let searchNode = null;
    expect(tree.inOrder()).toEqual([2, 4, 6, 8, 10, 12, 14]);

    searchNode = tree.search(0);
    expect(searchNode).toBe(null);

    searchNode = tree.search(2);
    expect(searchNode.val).toBe(2);
    expect(searchNode.left).toBe(null);
    expect(searchNode.right).toBe(null);

    searchNode = tree.search(4);
    expect(searchNode.val).toBe(4);
    expect(searchNode.left).toHaveProperty('val', 2);
    expect(searchNode.right).toHaveProperty('val', 6);

    searchNode = tree.search(8);
    expect(searchNode.val).toBe(8);
    expect(searchNode.left).toHaveProperty('val', 4);
    expect(searchNode.right).toHaveProperty('val', 12);
  });

  it('test BinarySearchTree insert()', () => {
    tree = new BinarySearchTree();
    tree.insert(8);
    tree.insert(8);
    expect(tree.inOrder()).toEqual([8]);

    tree.insert(4);
    tree.insert(12);
    expect(tree.inOrder()).toEqual([4, 8, 12]);

    tree.insert(2);
    tree.insert(6);
    tree.insert(10);
    tree.insert(14);
    expect(tree.inOrder()).toEqual([2, 4, 6, 8, 10, 12, 14]);
  });

  it('test BinarySearchTree remove()', () => {
    expect(tree.inOrder()).toEqual([2, 4, 6, 8, 10, 12, 14]);

    tree.remove(2);
    expect(tree.search(2)).toBe(null);
    expect(tree.search(4).left).toBe(null);
    expect(tree.inOrder()).toEqual([4, 6, 8, 10, 12, 14]);

    tree.remove(4);
    expect(tree.search(4)).toBe(null);
    expect(tree.search(8).left).toHaveProperty('val', 6);

    tree.remove(8);
    expect(tree.search(8)).toBe(null);
    expect(tree.search(10).right).toHaveProperty('val', 12);

    tree.remove(12);
    expect(tree.search(12)).toBe(null);
    expect(tree.search(10).right).toHaveProperty('val', 14);

    tree.remove(14);
    expect(tree.search(14)).toBe(null);
    expect(tree.search(10).right).toBe(null);
    
    tree.remove(10);
    expect(tree.search(10)).toBe(null);
    expect(tree.search(6)).toHaveProperty('val', 6);

    tree.remove(6);
    expect(tree.search(6)).toBe(null);
    expect(tree.inOrder()).toEqual([]);

    tree.remove(6);
    expect(tree.search(6)).toBe(null);
    expect(tree.inOrder()).toEqual([]);
  });

  it('test BinarySearchTree levelOrder()', () => {
    expect(tree.levelOrder()).toEqual([8, 4, 12, 2, 6, 10, 14]);

    tree.remove(2);
    expect(tree.levelOrder()).toEqual([8, 4, 12, 6, 10, 14]);

    tree.remove(4);
    expect(tree.levelOrder()).toEqual([8, 6, 12, 10, 14]);

    tree.remove(12);
    expect(tree.levelOrder()).toEqual([8, 6, 14, 10]);
  });

  it('test BinarySearchTree preOrder()', () => {
    expect(tree.preOrder()).toEqual([8, 4, 2, 6, 12, 10, 14]);

    tree.remove(2);
    expect(tree.preOrder()).toEqual([8, 4, 6, 12, 10, 14]);

    tree.remove(4);
    expect(tree.preOrder()).toEqual([8, 6, 12, 10, 14]);

    tree.remove(12);
    expect(tree.preOrder()).toEqual([8, 6, 14, 10]);
  });

  it('test BinarySearchTree inOrder()', () => {
    expect(tree.inOrder()).toEqual([2, 4, 6, 8, 10, 12, 14]);

    tree.remove(2);
    expect(tree.inOrder()).toEqual([4, 6, 8, 10, 12, 14]);

    tree.remove(4);
    expect(tree.inOrder()).toEqual([6, 8, 10, 12, 14]);

    tree.remove(12);
    expect(tree.inOrder()).toEqual([6, 8, 10, 14]);
  });

  it('test BinarySearchTree postOrder()', () => {
    expect(tree.postOrder()).toEqual([2, 6, 4, 10, 14, 12, 8]);

    tree.remove(2);
    expect(tree.postOrder()).toEqual([6, 4, 10, 14, 12, 8]);

    tree.remove(4);
    expect(tree.postOrder()).toEqual([6, 10, 14, 12, 8]);

    tree.remove(12);
    expect(tree.postOrder()).toEqual([6, 10, 14, 8]);
  });
});