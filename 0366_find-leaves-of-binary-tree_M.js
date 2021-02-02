// https://leetcode.com/problems/find-leaves-of-binary-tree/
// Given a binary tree, collect a tree's nodes as if you were doing this: Collect and remove all leaves, repeat until the tree is empty.

/** Definition for a binary tree node. 
 * function TreeNode(val, left, right) { 
 * this.val = (val===undefined ? 0 : val) 
 * this.left = (left===undefined ? null : left) 
 * this.right = (right===undefined ? null : right) * } 
 */

/** 
 * @param {TreeNode} root 
 * @return {number[][]} 
 */

// 🐕 Spencer's
var findLeaves = function (root) {
  const output = [];
  const dfs = (node) => {
    if (!node) return -1;
    const left = dfs(node.left);
    const right = dfs(node.right);
    const index = Math.max(left, right) + 1 output[index] = output[index] || [] output[index].push(node.val);
    return index;
  };
  dfs(root);
  return output;
};
