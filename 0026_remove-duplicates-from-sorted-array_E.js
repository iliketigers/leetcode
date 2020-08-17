/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
    i++;
  }
  return nums.length;
};

// Leetcode solution
// Instead of splicing out, once it hits a unique number just overwrite the beginning of the array with the unique number.
const removeDuplicatesLeet = (nums) => {
  if (nums.length === 0) { return 0; }
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] != nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};