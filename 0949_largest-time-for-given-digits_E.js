/**
 * https://leetcode.com/problems/largest-time-for-given-digits/
 * September challenge #1
 * Given an array of 4 digits, return the largest 24 hour time that can be made.
 * The smallest 24 hour time is 00:00, and the largest is 23:59.  Starting from 00:00, a time is larger if more time has elapsed since midnight.
 * Return the answer as a string of length 5.  If no valid time can be made, return an empty string.
 *
 * ⏳ 2020-09-01 21.00.21 ~ 23.28.20
 * 📝 Notes:
 * Supoosedly this is "easy" if you can use a built-in permutation function, but JS doesn't have that and I don't know Heap's algorithm so I struggled for 2 hours.
 * Ended up looking at a brute force solution, then redoing it from memory. Will revisit in future. Super annoyed this was marked as easy.
 */

/**
 * @param {number[]} A
 * @return {string}
 */
const largestTimeFromDigits = function (A) {
  A = A.sort().reverse().join('');
  for (h = 23; h >= 0; h--) {
    for (m = 59; m >= 0; m--) {
      let hh = Math.floor(h / 10);
      let ii = h % 10;
      let mm = Math.floor(m / 10);
      let nn = m % 10;
      let temp = [hh, ii, mm, nn].sort().reverse().join('');

      if (A == temp) {
        return `${hh}${ii}:${mm}${nn}`;
      }
    }
  }
  return '';
};

console.log(largestTimeFromDigits([1, 2, 3, 4]));
