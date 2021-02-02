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
  for (_ of haystack) {
    if (haystack.substring(left, left + needle.length) === needle) {
      return left;
    } else {
      left++;
    }
  }
  return -1;
};

const haystack = "abc";
const needle = "cde";
console.log(strStr(haystack, needle));