// https://leetcode.com/problems/n-ary-tree-preorder-traversal/
// Given an n-ary tree, return the preorder traversal of its nodes' values.

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  // for each child of a ndoe,
  // also check its children
  // if there are no children, return, and push the previous node's value
  const result = [];
  helper = (root) => {
    if (!root) {
      return;
    }
    result.push(root.val);
    root.children.forEach((e) => {
      helper(e);
    });
  };
  helper(root);
  return result;
};
