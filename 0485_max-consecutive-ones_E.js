// https://leetcode.com/problems/max-consecutive-ones/
// Given a binary array, find the maximum number of consecutive 1s in this array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  // if index = 1, count ++
  // if not 1, count2 = count, count = 0
  // keep going
  let count1 = 0;
  let count2 = 0;
  nums.forEach((e) => {
    if (e === 1) {
      count1++;
    } else {
      count2 = Math.max(count1, count2);
      count1 = 0;
    }
  });
  return Math.max(count1, count2);
};
