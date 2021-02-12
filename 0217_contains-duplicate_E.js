// https://leetcode.com/problems/contains-duplicate/
// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    const found = nums.filter((f) => f === nums[i]);
    if (found.length > 1) {
      return true;
    }
  }
  return false;
};
