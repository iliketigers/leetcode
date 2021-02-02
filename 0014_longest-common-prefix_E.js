// https://leetcode.com/problems/longest-common-prefix/
/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const prefix = strs[0];
  if (!prefix || strs === ['']) { return ''; } else {
    for (let i = 0; i < prefix.length; i++) { // loops only as long as the first word is long
      let prefixChar = prefix[i];
      for (j = 1; j < strs.length; j++) { // loops only as long as the number of words
        let word = strs[j];
        let wordChar = word[i];
        let reachedEndOfWord = i === word.length;
        let charsMatch = wordChar === prefixChar;
        if (reachedEndOfWord || !charsMatch) { // if we reach the end of the first word, or the chars are different
          let result = prefix.substring(0, i);
          return result; // then get a substring at this point
        }
      }
    }
    return prefix; // if blank
  }
};

// const array1 = ["fly", "flo", "flower"];
const array1 = [''];
console.log(longestCommonPrefix(array1));