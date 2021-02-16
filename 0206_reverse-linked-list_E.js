// https://leetcode.com/problems/reverse-linked-list/
// Reverse a singly linked list.

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
const reverseList = (head) => {
  if (!head || !head.next) {
    return head;
  }
  let tail = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return tail;
};

// clever version from dad
const concat = (list1, list2) =>
  list1 === null ? list2 : new ListNode(list1.val, concat(list1.next, list2));

const reverseList = (head) =>
  head === null
    ? null
    : concat(reverseList(head.next), new ListNode(head.val, null));
