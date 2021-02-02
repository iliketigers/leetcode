/** https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/
 * Given a string s formed by digits ('0' - '9') and '#' . We want to map s to English lowercase characters as follows:
 * Characters ('a' to 'i') are represented by ('1' to '9') respectively.
 * Characters ('j' to 'z') are represented by ('10#' to '26#') respectively. 
 * Return the string formed after mapping.
 * It's guaranteed that a unique mapping will always exist. 
*/

/**
 * @param {string} s
 * @return {string}
 */
const freqAlphabets = function (s) {
  const arr = s.split('').reverse();
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let isHashed = 0;
  let arrTwo = [];
  let output = '';

  arr.forEach((char, i) => {
    if (char === '#' && !isHashed) {
      arrTwo.push(arr[i + 2] + arr[i + 1]);
      isHashed = 2;
    } else if (char !== '#' && isHashed) {
      isHashed--;
    } else if (char !== '#' && !isHashed) {
      arrTwo.push(char);
    }
  });

  arrTwo = arrTwo.reverse();
  arrTwo.forEach((element) => {
    output += alphabet[element - 1];
  });
  return (output);
};

// 🐕 Spencer's
/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  const arr = s.split('').reverse();
  let tmp = '';
  let ones = false;
  let tens = false;

  arr.forEach((char, i) => {
    if (char === '#' && !ones && !tens) {
      tmp = arr[i + 2] + arr[i + 1] + arr[i];
      ones = true;
      tens = true;

    }
    else if (char !== '#' && !tmp.includes('#')) {

      tmp = char;


    } else if (char !== '#' && tmp.includes('#')) {


    }
    console.log(tmp);
  });
};