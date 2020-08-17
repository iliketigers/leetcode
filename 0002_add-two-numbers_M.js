/* eslint-disable require-jsdoc */
// https://leetcode.com/problems/add-two-numbers/

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

// expected: 708
const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

const addTwoNumbers = function (l1, l2) {
  var List = new ListNode(0);
  var head = List;
  var sum = 0;
  var carry = 0;

  while (l1 !== null || l2 !== null || sum > 0) {
    console.log('list',List);
    console.log('head',head);
    if (l1 !== null) {
      sum = sum + l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum = sum + l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }

    head.next = new ListNode(sum);
    head = head.next;

    sum = carry;
    carry = 0;

  }

  return List.next;
  // let l1Arr = [];
  // let l2Arr = [];
  // while (l1 !== null || l2 !== null) {
  //   l1Arr.push(l1.val);
  //   l1 = l1.next;
  //   l2Arr.push(l2.val);
  //   l2 = l2.next;

  // }
  // l1Arr = parseInt(l1Arr.reverse().toString().split(',').join(''));
  // l2Arr = parseInt(l2Arr.reverse().toString().split(',').join(''));
  //   console.log(l1Arr);
  //   console.log(l2Arr);

  //   // if list.next = null,
  //     // ListNode.next = 7
  //     // else temp list = 

  //   // let sum = l1Arr + l2Arr;
  //   // let finalList = new ListNode();
  //   // let lastDigit = sum%10;
  //   // finalList.val = lastDigit;
  //   // sum -=lastDigit;
  //   // sum /=10;
  //   // console.log(sum);
  //   // console.log(finalList);
  //   // finalList.val = lastDigit;
  //   // console.log(finalList);
  //   // return sum;
  // // for the length of the sum, 
  // let testList = new ListNode();
  // console.log(testList);
  // testList.next = new ListNode(3);
  // console.log(testList);
  // testList = testList.next;
  // console.log(testList);




};
addTwoNumbers(l1, l2);
