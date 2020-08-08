// https://leetcode.com/problems/two-sum/
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // target = 4
  // nums = [2, 3, 4, 1]
  // return [2, 3]

  debugger;
  const answer = [];
  nums.forEach((num, i) => {
    for (j = 0; j < nums.length; j++) {
      if (target - num === nums[j]) {
        answer.push(i, j);
      }
    }
  });
  return answer;
};
console.log(twoSum([2, 7, 11, 15], 9));