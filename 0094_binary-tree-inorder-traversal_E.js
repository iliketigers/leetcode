// https://leetcode.com/problems/binary-tree-inorder-traversal/
/**
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.
Example 1:
Input: root = [1,null,2,3]
Output: [1,3,2]
 */
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
var inorderTraversal = function (root) {
  // inorder is L-N-R
  // 1, 3, 2
  // traverse(left)
  // print(val)
  // traverse(right)
  // base case is if val is null

  let result = [];

  const recurse = (root) => {
    if (!root) {
      return;
    }
    recurse(root.left);
    result.push(root.val);
    recurse(root.right);
  };
  recurse(root);
  return result;
};
