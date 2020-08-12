/**
 * https://leetcode.com/problems/search-insert-position/
 * Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 * You may assume no duplicates in the array.
 */

/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
const searchInsert = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
};

// const nums = [1, 3, 5, 6], target = 5; // 2 
// const nums = [1, 3, 5, 6], target = 2; // 1
const nums = [1, 3, 5, 6], target = 7; // 4
console.log(searchInsert(nums, target));