// https://leetcode.com/problems/diameter-of-binary-tree/
// Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// Example:
// Given a binary tree
//           1
//          / \
//         2   3
//        / \
//       4   5
// Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

// Note: The length of path between two nodes is represented by the number of edges between them.
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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  // initialize edges
  // traverse the tree
  // store vals in an array & number of times its been visited
  // if visit count > 1, subtract 1 from # of edges

  let edges = 0;
  const visited = { 1: [], 2: [] };

  const helper = (root) => {
    if (!root) {
      return;
    }

    helper(root.left);
    if (!visited[1].includes(root.val)) {
      visited[1].push(root.val);
      edges++;
      console.log(edges, visited);
    }
    if (visited[1].includes(root.val)) {
      visited[2].push(root.val);
    }
    if (visited[2].includes(root.val)) {
      edges--;
      console.log(edges, visited);
    }
    helper(root.right);
  };
  helper(root);

  return edges;
};
