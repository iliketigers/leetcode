/**
 * https://leetcode.com/problems/implement-strstr/
 * Implement strStr().
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 */

/**
* @param {string} haystack
* @param {string} needle
* @return {number}
*/
var strStr = function (haystack, needle) {
  if (!needle) {
    return 0;
  }
  let left = 0;
  let right = needle.length;
  for (e of haystack) {
    if (haystack.substring(left, right) === needle) {
      return left;
    } else {
      left++;
      right++;
    }
  }
  return -1;
};

const haystack = "";
const needle = "aa";
console.log(strStr(haystack, needle));