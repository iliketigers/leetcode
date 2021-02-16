// https://leetcode.com/problems/binary-search/
// Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 [-1,0,3,5,9,12]
 9
 */
var search = function (nums, target) {
  const helper = (lo, hi) => {
    if (lo > hi) {
      return -1;
    }
    let splitIndex = Math.floor((lo + hi) / 2);
    if (nums[splitIndex] === target) {
      return splitIndex;
    }
    if (nums[splitIndex] > target) {
      return helper(lo, splitIndex - 1);
    }
    if (nums[splitIndex] < target) {
      return helper(splitIndex + 1, hi);
    }
  };
  return helper(0, nums.length - 1);
};
