// https://leetcode.com/problems/score-of-parentheses/
// Given a balanced parentheses string S, compute the score of the
// string based on the following rule:
// () has score 1
// AB has score A + B, where A and B are balanced parentheses strings.
// (A) has score 2 * A, where A is a balanced parentheses string.

// const S = '()'; // 1
const S = '(())'; // 2
// const S = "()()" // 2
// const S = "(()(()))"; // 6
// const S = "((()))"; // 4
// const S = '(()())()((()))'; // 9 =

/**
 * @param {string} S
 * @return {number}
 */
const scoreOfParentheses = function(S) {
  let equation = '';
  const arr = S.split('');
  let previous = '';
  arr.forEach((element) => {
    const firstTwo = previous + element;
    if (firstTwo === '((') {
      equation += '2*(';
    } else if (firstTwo === ')(') {
      equation += '+';
    } else if (firstTwo === '()') {
      equation += '1';
    } else if (firstTwo === '))') {
      equation += ')';
    }
    previous = element;
  });
  return eval(equation);
};

console.log((scoreOfParentheses(S)));
