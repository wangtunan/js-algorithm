import TreeNode from './treeNode.js';

export default class BinarySearchTree {
  constructor() {
    this._root = null;
  }
  search(val) {
    let curr = this._root;
    while(curr !== null) {
      if (curr.val < val) {
        curr = curr.right;
      } else if (curr.val > val) {
        curr = curr.left;
      } else {
        break;
      }
    }
    return curr;
  }
  insert(val) {
    if (this._root === null) {
      this._root = new TreeNode(val);
      return;
    }
    let curr = this._root;
    let prev = null;
    while(curr !== null) {
      if (curr.val === val) {
        return;
      }
      prev = curr;
      if (curr.val < val) {
        curr = curr.right;
      } else {
        curr = curr.left;
      }
    }
    const node = new TreeNode(val);
    if (prev.val < val) {
      prev.right = node;
    } else {
      prev.left = node;
    }
  }
  remove(val) {
    if(this._root === null) {
      return;
    }
    let curr = this._root;
    let prev = null;
    while(curr !== null) {
      if (curr.val === val) {
        break;
      }
      prev = curr;
      if (curr.val < val) {
        curr = curr.right;
      } else {
        curr = curr.left;
      }
    }
    if (curr.left === null || curr.right === null) {
      const child = curr.left || curr.right;
      if (curr === this._root) {
        this._root = child;
      } else if (prev.left === curr) {
        prev.left = child;
      } else {
        prev.right = child;
      }
    } else {
      let temp = curr.right;
      while(temp.left !== null) {
        temp = temp.left;
      }
      this.remove(temp.val);
      curr.val = temp.val;
    }
  }
  levelOrder() {
    const list = [];
    const queue = [this._root];
    while(queue.length) {
      const node = queue.shift();
      list.push(node.val);
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
    return list;
  }
  preOrder() {
    const list = [];
    this.dfs(this._root, 'pre', list);
    return list;
  }
  inOrder() {
    const list = [];
    this.dfs(this._root, 'in', list);
    return list;
  }
  postOrder() {
    const list = [];
    this.dfs(this._root, 'post', list);
    return list;
  }
  dfs(root, order, list) {
    let curr = root;
    if (curr === null) {
      return;
    }
    if (order === 'pre') {
      list.push(curr.val);
    }
    this.dfs(curr.left, order, list);
    if (order === 'in') {
      list.push(curr.val);
    }
    this.dfs(curr.right, order, list);
    if (order === 'post') {
      list.push(curr.val);
    }
  }
}