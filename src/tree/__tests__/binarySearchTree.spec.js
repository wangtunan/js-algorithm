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
    expect(tree.inOrder()).toEqual([2, 4, 6, 8, 10, 12, 14]);
  });

  it('test BinarySearchTree insert()', () => {
    
  });

  it('test BinarySearchTree remove()', () => {
    
  });

  it('test BinarySearchTree levelOrder()', () => {
    
  });

  it('test BinarySearchTree preOrder()', () => {
    
  });

  it('test BinarySearchTree inOrder()', () => {
    
  });

  it('test BinarySearchTree postOrder()', () => {
    
  });
});