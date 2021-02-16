// https://leetcode.com/problems/n-ary-tree-level-order-traversal/
// Given an n-ary tree, return the level order traversal of its nodes' values.

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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let levels = [];
  let level = 0;

  // return levels
  // if level = levels.length, then that means that nothing has been pushed yet. so push a new array
  // after that, push the current value into that level, and then call the function again with the next child + next level
  // when it starts going back up,
  helper = (node, level) => {
    if (!node) {
      return levels;
    }
    if (level === levels.length) {
      levels.push([]);
    }
    levels[level].push(node.val);
    node.children.forEach((e) => {
      helper(e, level + 1);
    });
  };
  helper(root, 0);
  return levels;
};
