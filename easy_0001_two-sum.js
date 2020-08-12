/**
 * https://leetcode.com/problems/two-sum/
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// brute force
const twoSumBruteForce = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (j = 0; j < nums.length; j++) {
      if (i !== j) {
        if (target - nums[i] === nums[j]) {
          return [i, j];
        }
      }
    }
  };
};

// two-pass hash table
const twoSumTwoPassHash = (nums, target) => {
  let mapOfNumsAndTheirIndexes = new Map();

  nums.forEach((num, index) => {
    mapOfNumsAndTheirIndexes.set(num, index);
  });

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    let hasKey = mapOfNumsAndTheirIndexes.has(complement);
    let value = mapOfNumsAndTheirIndexes.get(complement);
    if (hasKey && i !== value) {
      return [i, value];
    }
  }
};

// one-pass hash table
const twoSum = (nums, target) => {
  let mapOfNumsAndTheirIndexes = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let complement = target - num;
    let hashedIndex = mapOfNumsAndTheirIndexes.get(complement);
    let check = mapOfNumsAndTheirIndexes.has(complement) && hashedIndex !== i;
    if (check) {
      return [hashedIndex, i];
    }
    mapOfNumsAndTheirIndexes.set(num, i);
  }
};

console.log(twoSum([3, 2, 3], 6));