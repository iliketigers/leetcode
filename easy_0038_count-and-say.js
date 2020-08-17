/**
 * https://leetcode.com/problems/count-and-say/
 * The count-and-say sequence is the sequence of integers with the first five terms as following:
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 * 1 is read off as "one 1" or 11.
 * 11 is read off as "two 1s" or 21.
 * 21 is read off as "one 2, then one 1" or 1211.
 * 
 * Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence. You can do so recursively, in other words from the previous member read off the digits, counting the number of digits in groups of the same digit.
 * Note: Each term of the sequence of integers will be represented as a string.
 */

/**
* @param {number} n
* @return {string}
*/
const countAndSay = (n) => {
  let string = '1';
  while (n > 1) {
    let left = 0;
    let numberOfNumbers = 1;
    let temp = '';
    for (let i = 0; i < string.length; i++) {
      if (string[left] === string[left + numberOfNumbers]) {
        numberOfNumbers++;
      } else {
        temp += numberOfNumbers + string[i];
        left += numberOfNumbers;
        numberOfNumbers = 1;
      }
    }
    string = temp;
    n--;
  };
  return string;
};

// const n = 1; // 1
// const n = 2; // 11
const n = 3; // 21
// const n = 4; // 1211
// const n = 5; // 111221
// const n = 6; // 312211
console.log(countAndSay(n));