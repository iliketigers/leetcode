// https://leetcode.com/problems/sort-an-array/
// Given an array of integers nums, sort the array in ascending order.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = (nums) => {
  // quicksort
  // pick a spot
  // create a left chunk
  // create a right chunk
  // iterate thru nums. if < spot, add to left, if > spot, add to right.
  // call sort on the left chunk.
  // base case is nums length = 0; return nums?
  if (nums.length < 2) {
    return nums;
  }
  let m = nums[0];
  let leftChunk = [];
  let rightChunk = [];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < m) {
      leftChunk.push(nums[i]);
    } else if (nums[i] >= m) {
      rightChunk.push(nums[i]);
    }
  } // chunks are full; eg [2, 3, 1][5]
  return sortArray(leftChunk).concat(m, sortArray(rightChunk));
};
