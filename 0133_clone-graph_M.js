// https://leetcode.com/problems/clone-graph/solution/
// Given a reference of a node in a connected undirected graph.
// Return a deep copy (clone) of the graph.
// Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.
// class Node {
//     public int val;
//     public List<Node> neighbors;
// }

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

// create clone map and stack array
// add node to stack for processing
// create new node in clone
// process oldest node in stack
// for all of the neighbors
// check if it's in clones, if not, add it and add to stack
// clone each neighbor and add it to the cloned node.neighbors

const cloneGraph = (node) => {
  if (!node) {
    return node;
  }

  let clones = new Map(); // Map {node => clonedNode}
  let stack = [];
  stack.push(node);
  clones.set(node, new Node(node.val, [])); // create with no neighbors

  while (stack.length) {
    let curr = stack.pop();
    for (let neighbor of curr.neighbors) {
      if (!clones.has(neighbor)) {
        clones.set(neighbor, new Node(neighbor.val, [])); // create clone if needed
        stack.push(neighbor); // add to stack for processing
      }
      let clonedNode = clones.get(curr);
      let clonedNeighbor = clones.get(neighbor); // curr.neighbors[i]
      clonedNode.neighbors.push(clonedNeighbor);
    } // end `for` loop
  }
  return clones.get(node);
};

// test: [[2,4],[1,3],[2,4],[1,3]]
//        1     2     3     4
class Node {
  constructor(val, neighbors) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

let node1 = new Node(1, []);
let node2 = new Node(2, []);
let node3 = new Node(3, []);
let node4 = new Node(4, []);

node1.neighbors.push(node2, node4);
node2.neighbors.push(node1, node3);
node3.neighbors.push(node2, node4);
node4.neighbors.push(node1, node3);

let node = node1;

console.log(cloneGraph(node1));
