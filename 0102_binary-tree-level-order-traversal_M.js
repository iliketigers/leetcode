// https://leetcode.com/problems/binary-tree-level-order-traversal/

// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = (root) => {
  let levels = 0;
  const result = [];
  if (!root) {
    return result;
  }
  const recur = (root, level) => {
    if (result.length === level) {
      result.push([]);
    }
    result[level].push(root.val);
    if (root.left) {
      recur(root.left, level + 1);
    }
    if (root.right) {
      recur(root.right, level + 1);
    }
    // return;
  };
  recur(root, 0);
  return result;
};
