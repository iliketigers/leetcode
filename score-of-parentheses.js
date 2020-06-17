/* eslint-disable max-len */
// https://leetcode.com/problems/score-of-parentheses/
// Given a balanced parentheses string S, compute the score of the string based on the following rule:
// () has score 1
// AB has score A + B, where A and B are balanced parentheses strings.
// (A) has score 2 * A, where A is a balanced parentheses string.

// const S = '()'; // 1
// const S = "(())" // 2
// const S = "()()" // 2
// const S = "(()(()))"; // 6
// const S = "((()))"; // 4
// const S = "(()())()((()))"; // 9

let previous = null;
let arr;
let equation = '';

/**
 * @param {string} S
 * @return {number}
 */
const scoreOfParentheses = function (S) {
  arr = S.split('');
  
  if (arr[0] === '(') {
    if (!previous) {
      equation += '(';
    } else if (previous === '(') { // ((
      equation += '2*((';
    } else if (previous === ')') { // )(
      equation += '+(';
    }
  }

  if (arr[0] === ')') {
    if (previous === '(') { // ()
      equation += '1)';
    } else if (previous === ')') { // ))
      equation += '))';
    }
  }

  previous = arr[0];
  arr = arr.slice(1);
  S = arr.join('');
  if (S) {
    equation = scoreOfParentheses(S);
  } else {
    return eval(equation);
  }
  return eval(equation);
};

console.log(eval(scoreOfParentheses(S)));