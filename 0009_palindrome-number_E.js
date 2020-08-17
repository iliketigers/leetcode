// https://leetcode.com/problems/palindrome-number/
// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

/**
 * @param {number} x
 * @return {boolean}
 */
// solution 1: convert to string
var isPalindromeConvertToString = function (x) {
  const reversed = x.toString().split('').reverse().join('');
  return x.toString() === reversed;
};

// solution 2: don't convert the number
const isPalindrome = (x) => {
  if (x < 0) return false;

  let original = x;
  let reversed = 0;

  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return original === reversed;
};

console.log(isPalindrome(123454321));
console.log(isPalindrome(45654));
console.log(isPalindrome(-900));
console.log(isPalindrome(900));