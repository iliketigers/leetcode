// https://leetcode.com/problems/reverse-integer/
// Given a 32-bit signed integer, reverse digits of an integer.

/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {

  let reversed = Math.abs(x).toString().split('').reverse().join('');
  const max = Math.pow(2, 31);

  if (Math.abs(reversed) > max) {
    return 0;
  } else {

    if (Math.sign(x) === -1) {
      return -1* reversed;
    } else {
      return Math.abs(reversed);
    }
  }
};

// const reverse = function (x) {
//   let reversed = Math.abs(x).toString().split('').reverse().join('');
//   reversed *= Math.sign(x)

//   if (Math.abs(reversed) > Math.pow(2, 31)) {
//     return 0;
//   } else {
//     return reversed;
//   }
// };

console.log(reverse(123)); // 321
console.log(reverse(9000000)); // 9
console.log(reverse(-123)); // -321
console.log(reverse(1534236469)); // 0
