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

//  // brute force (my solution)
// const twoSum = (nums, target) => {
//   debugger;
//   for (i = 0; i < nums.length; i++) {
//     for (j = 0; j < nums.length; j++) {
//       if (i !== j) {
//         if (target - nums[i] === nums[j]) {
//           return [i, j];
//         }
//       }
//     }
//   };
// };

// two-pass hash table
const twoSum = (nums, target) => {
  let hashTable = new Map();

  nums.forEach((num, index) => {
    hashTable.set(num, index);
  });

  for (i = 0; i < nums.length; i++) {
    let key = target - nums[i];
    let hasKey = hashTable.has(key);
    let value = hashTable.get(key);
    if (hasKey && i !== value) {
      return [i, value];
    }
  }
};

console.log(twoSum([3, 2, 3], 6));