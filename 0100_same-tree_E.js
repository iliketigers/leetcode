// https://leetcode.com/problems/same-tree/
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
// Example 1:
// Input: p = [1,2,3], q = [1,2,3]
// Output: true
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  // traverse both trees at the same time
  // compare the root.val of both, if any are not equal then it's false

  // to traverse, let's do NLR order because if the node value doesn't match there's no point

  // base case: if node is null, return true
  // r case: if node1.val == node2.val, go to left, , then right, then done.

  if (!p && !q) {
    return true;
  }
  if (!p || !q) {
    return false;
  }
  if (p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
  return false;
};
