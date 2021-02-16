// https://leetcode.com/problems/reverse-words-in-a-string/
// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => {
  const reverseString = (arr, left, right) => {
    while (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]]; // swaps
      right--;
      left++;
    }
  };
  const trimSpaces = (arr) => {
    const result = [];
    arr.forEach((e, i) => {
      if (e != ' ') {
        result.push(e);
      } else if (e === ' ' && arr[i + 1] != ' ') {
        result.push(e);
      }
    });

    if (result[0] === ' ') {
      result.shift();
    }
    if (result[result.length - 1] === ' ') {
      result.pop();
    }
    return result;
  };

  const arr = s.split('');
  reverseString(arr, 0, arr.length - 1);
  let left = 0;
  let right = 0;
  while (left < arr.length) {
    if (arr[right] === ' ' || right === arr.length - 1) {
      if (right === arr.length - 1) {
        reverseString(arr, left, right);
        break;
      }
      if (arr[right] === ' ') {
        reverseString(arr, left, right - 1);
        left = right + 1;
      }
    }
    right++;
  }
  const trimmed = trimSpaces(arr);
  return trimmed.join('');
};
