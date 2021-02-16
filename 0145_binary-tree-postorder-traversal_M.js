// https://leetcode.com/problems/binary-tree-postorder-traversal/
// Given the root of a binary tree, return the postorder traversal of its nodes' values.

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
 * @return {number[]}
 */
const postorderTraversal = (root) => {
  const result = [];
  const helper = (node) => {
    if (node === null) {
      return;
    }
    helper(node.left);
    helper(node.right);
    result.push(node.val);
  };
  helper(root);
  return result;
};
