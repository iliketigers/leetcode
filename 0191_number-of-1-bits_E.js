// https://leetcode.com/problems/number-of-1-bits/
// Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = (n) => {
  const nStr = n.toString(2);
  const matches = [...nStr.matchAll(/1/g)];
  return matches.length;
};
