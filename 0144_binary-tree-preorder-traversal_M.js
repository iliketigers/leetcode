// https://leetcode.com/problems/binary-tree-preorder-traversal/description/
// Given the root of a binary tree, return the preorder traversal of its nodes' values.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
Input: root = [1,null,2,3]
Output: [1,2,3]

Input: root = []
Output: []

Input: root = [1]
Output: [1]

Input: root = [1,2]
Output: [1,2]
*/
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = (root) => {
  let result = [];

  helper = (root) => {
    if (!root) {
      return;
    }
    result.push(root.val);
    helper(root.left);
    helper(root.right);
  };
  helper(root);
  return result;
};
