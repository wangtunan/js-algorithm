import TreeNode from '../tree/treeNode.js';

function dfs(preOrder, inOrderMap, i, l, r) {
  // 区间为空是，表示空子树，终止
  if (r - l < 0) {
    return null;
  }
  // 初始化根节点
  const rootVal = preOrder[i];
  const root = new TreeNode(rootVal);
  // 查询m，从而划分左、右子树
  const m = inOrderMap.get(rootVal);
  // 构建左子树
  root.left = dfs(preOrder, inOrderMap, i + 1, l, m - 1);
  // 构建右子树
  root.right = dfs(preOrder, inOrderMap, i + 1 + (m - l), m + 1, r);
  // 返回根节点
  return root;
}
export default function buildTree(preOrder, inOrder) {
  const inOrderLen = inOrder.length;
  const inOrderMap = new Map();
  for(let i = 0; i < inOrderLen; i++) {
    inOrderMap.set(inOrder[i], i);
  }
  const root = dfs(preOrder, inOrderMap, 0, 0,  inOrderLen - 1);
  return root;
}