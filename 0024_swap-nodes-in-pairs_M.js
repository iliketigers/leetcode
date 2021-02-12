//https://leetcode.com/problems/swap-nodes-in-pairs/solution/
// Given a linked list, swap every two adjacent nodes and return its head.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = (head) => {
  // if null, return
  // if length 1, return
  // if length 2, swap values, return
  // if length 3, swap values, go to next, return
  // if length 4, swap values, go to next, swap values, return
  swap = (head) => {
    if (head === null || head.next === null) {
      return head;
    }
    [head.val, head.next.val] = [head.next.val, head.val];
    swap(head.next.next);
  };
  swap(head);
  return head;
};
