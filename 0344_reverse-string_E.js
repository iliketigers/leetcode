/** https://leetcode.com/problems/reverse-string/
 * Write a function that reverses a string. The input string is given as an array of characters char[].
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 * You may assume all the characters consist of printable ascii characters.
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
*/
var reverseString = function (s) {
  const helper = (left, right) => {
    if (left < right) {
      [s[left], s[right]] = [s[right], s[left]];
      left++;
      right--;
      helper(left, right, s);
      return s;
    } else {
      return;
    }
  };
  helper(0, s.length - 1);
};

let testcase = ['h', 'e', 'l', 'l', 'o'];
reverseString(testcase);
console.log(testcase);