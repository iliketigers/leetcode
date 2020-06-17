/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  const flipped = x.toString().split('').reverse().join('');
  return x.toString() === flipped;
};

// console.log(isPalindrome(121));
