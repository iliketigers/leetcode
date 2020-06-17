/* eslint-disable max-len */
// https://leetcode.com/problems/score-of-parentheses/
// Given a balanced parentheses string S, compute the score of the string based on the following rule:

// () has score 1
// AB has score A + B, where A and B are balanced parentheses strings.
// (A) has score 2 * A, where A is a balanced parentheses string.

/**
 * @param {string} S
 * @return {number}
 */
// var S = '()'; // 1
//  var S = "(())" // 2
//  var S = "()()" // 2
 var S = "(()(()))" // 6
let total = 0;
let tmp = 0;
let previous = null;
let arr;
var scoreOfParentheses = function(S) {
   arr = S.split('');

  if (arr[0] === '(') {
    if (previous === '(') { // ((
      tmp *= 2;
    } else if (previous === ')') { // )(
      tmp += 1;
    } else if (!previous) { // (
      tmp = 1; // initial paren
    }
  } else if (arr[0] === ')') {
    if (previous === '(') { // ()
      total +=tmp;
      tmp -= 1;
    } else if (previous === ')') { // ))
      // do nothing
    } else if (!previous) {
      console.log('error');
    }
  }
  previous = arr[0];
  arr = arr.slice(1);
  var newS = arr.join('');
  if (newS) {
    total = scoreOfParentheses(newS);
  } else {
    return total;
  }
  
  return total;
};

console.log(scoreOfParentheses(S));
