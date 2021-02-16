// https://leetcode.com/problems/squares-of-a-sorted-array/
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  // for each item, square it and store in new array
  // sort the new array
  const squares = [];
  nums.forEach((e) => {
    squares.push(e * e);
  });

  let left = 0;
  let right = squares.length - 1;
  return squares.sort(function (a, b) {
    return a - b;
  });
};
