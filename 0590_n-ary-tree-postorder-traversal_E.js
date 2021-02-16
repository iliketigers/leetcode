// https://leetcode.com/problems/n-ary-tree-postorder-traversal/
// Given an n-ary tree, return the postorder traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
  const result = [];
  helper = (root) => {
    if (!root) {
      return result;
    }
    root.children.forEach((e) => {
      helper(e);
    });
    result.push(root.val);
  };
  helper(root);
  return result;
};
