/** https://leetcode.com/problems/length-of-last-word/
 * Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word (last word means the last appearing word if we loop from left to right) in the string.
 * If the last word does not exist, return 0.
 * Note: A word is defined as a maximal substring consisting of non-space characters only.
 */

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
  if (!s) {
    return 0;
  }
  s = s.trim();
  if (!s.includes(' ')) {
    return s.length;
  }
  s = s.split('').reverse();
  let temp = '';
  for (c of s) {
    if (c != ' ') {
      temp += c;
    }
    else if (c === ' ') {
      return temp.length;
    }
  }
  return temp.length;
};

// Somebody's one-line answer lol
const lengthOfLastWordOneLine = (s) => {
  return s.trim().split(" ").pop().length;
};