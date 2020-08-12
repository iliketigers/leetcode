// 🐕 Spencer's
const sum = (arr) => {
  if (!arr.length) {
    return 0; // base case
  }
  return arr[0] + sum(arr.slice(1));
};

console.log(sum([1, 2, 3, 4]));

// leetcode example
const printReverse = (str) => {
  helper(0, str);
};

const helper = (index, str) => {
  if (str === null || index >= str.length) {
    return; // base case
  }
  helper(index + 1, str); // increments index
  console.log(str[index]); // logs char at that index
  // since the stack is last in first out, it will automatically pull the last index first, and down to the first. the recursion should stop at the end of the string or if the string doesn't exist.
};
printReverse('what');

// js.info
// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.
const sumTo = (num) => {
  if (num <= 0) {
    return num;
  } else {
    return num += sumTo(num - 1);
  }
};

console.log(sumTo(100));

// The factorial of a natural number is a number multiplied by "number minus one", then by "number minus two", and so on till 1. The factorial of n is denoted as n!
const factorial = (n) => {
  if (n <= 1) {
    return 1; // because the recursion will multiply by this also
  }
  return n *= factorial(n - 1);
};

console.log(factorial(3));

// Write a function fib(n) that returns the n-th Fibonacci number.
// Fn = Fn-1 + Fn-2



// leetcode problem: sort linked list
var mergeTwoLists = function (l1, l2) {
  // want to iterate thru each list, comparing the vals
  // then set the last next to the 'first' return val
  if (!l1 || !l2) return (l1 ? l1 : l2);
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
  // once l1 or l2 is returned, then its 'next' is set to the return value of the function. then the previous next is set, and on and on.
  // the function just returns the list at whatever point it's at.
  // so at the end, it returns "l1" which is at the tail node. that l1 is set as "l2.next" or whichever, which is then set as l1.next, which is set as l2.next, until it reaches the bottom of the stack.
};