export default class ArrayBinaryTree {
  constructor(treeArray) {
    this._tree = treeArray || [];
  }
  levelOrder() {
    const list = [];
    const size = this.size();
    for (let i = 0; i < size; i ++) {
      const val = this._tree[i];
      if (val !== null) {
        list.push(val);
      }
    }
    return list;
  }
  preOrder(root) {
    const list = [];
    this.dfs(root, 'pre', list);
    return list;
  }
  inOrder(root) {
    const list = [];
    this.dfs(root, 'in', list);
    return list;
  }
  postOrder(root) {
    const list = [];
    this.dfs(root, 'post', list);
    return list;
  }
  dfs(i, order, res) {
    const val = this.val(i);
    if (val === null) {
      return;
    }
    if (order === 'pre') {
      res.push(val);
    }
    this.dfs(this.left(i), order, res);
    if (order === 'in') {
      res.push(val);
    }
    this.dfs(this.right(i), order, res);
    if (order === 'post') {
      res.push(val);
    }
  }
  size() {
    return this._tree.length;
  }
  val(i) {
    if (i < 0 || i >= this.size()) {
      return null;
    }
    return this._tree[i];
  }
  left(i) {
    return 2 * i + 1;
  }
  right(i) {
    return 2 * i + 2;
  }
  parent(i) {
    return Math.floor((i - 1) / 2);
  } 
}