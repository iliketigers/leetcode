// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
// Given an array nums of integers, return how many of them contain an even number of digits.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  // if modulo 2 == 0, then it's even, increase counter
  let counter = 0;
  nums.forEach((e) => {
    if (e.toString().length % 2 === 0) {
      counter++;
    }
  });
  return counter;
};
