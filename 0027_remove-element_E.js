/**
 * https://leetcode.com/problems/remove-element/
 * Given an array nums and a value val, remove all instances of that value in-place and return the new length.
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 * The order of elements can be changed. It doesn't matter what you leave beyond the new length.
 */

// Based on the last problem like this, they don't actually want you to remove the elements, just move them to the end.

/**
* @param {number[]} nums
* @param {number} val
* @return {number}
*/
var removeElement = function (nums, val) {
  let swpPtr = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[swpPtr] = nums[i];
      swpPtr++;
    }
  }
  return swpPtr;
};

// const testcase = [3, 2, 2, 3];
// const val = 3;
const testcase = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;
console.log(removeElement(testcase, val));