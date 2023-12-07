import BinarySearchTree from '../src/tree/binarySearchTree.js';

const list = [8, 4, 12, 2, 6, 10, 14];
let tree = new BinarySearchTree();

list.forEach(item => {
  tree.insert(item);
});

tree.remove(2);

tree.remove(4);

tree.remove(8);

tree.remove(12);

tree.remove(14);

tree.remove(10);

tree.remove(10);

console.log(tree.preOrder());