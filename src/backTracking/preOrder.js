export default function preOrder(root, path, res) {
  // 剪枝
  if (!root || root.val === 3) {
    return;
  }
  // 尝试
  path.push(root);
  // 记录解
  if(root.val === 7) {
    res.push([...path]);
  }
  preOrder(root.left, path, res);
  preOrder(root.right, path, res);
  // 回退
  path.pop();
}