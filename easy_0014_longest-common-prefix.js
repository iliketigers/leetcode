// https://leetcode.com/problems/longest-common-prefix/
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const firstWord = strs[0];
  if (!firstWord || strs === ['']) { return ''; } else {
    for (i = 0; i < firstWord.length; i++) { // loops only as long as the first word is long
      let firstWordChar = firstWord[i];
      for (j = 1; j < strs.length; j++) { // loops only as long as the number of words
        let word = strs[j];
        let wordChar = word[i];
        let reachedEndOfWord = i === word.length;
        let charsMatch = wordChar === firstWordChar;
        if (reachedEndOfWord || !charsMatch) { // if we reach the end of the first word, or the chars are different
          let result = firstWord.substring(0, i);
          return result; // then get a substring at this point
        }
      }
    }
    return firstWord; // if blank
  }
};

// const array1 = ["fly", "flo", "flower"];
const array1 = [''];
console.log(longestCommonPrefix(array1));