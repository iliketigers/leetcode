// https://leetcode.com/problems/duplicate-zeros/
// Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written.

// Do the above modifications to the input array in place, do not return anything from your function.
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  const length = arr.length;
  const indices = [];
  arr.forEach((e, i) => {
    if (e === 0) {
      indices.push(i);
    }
  });
  indices.forEach((e, i) => {
    if (i < length) {
      arr.splice(e, 0, 0);
      indices.forEach((e, i) => {
        indices[i] = e + 1;
      });
    }
  });
  arr.splice(length);
};
