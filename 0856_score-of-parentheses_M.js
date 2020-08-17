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


// 🐕 Spencer's


const scoreOfParentheses = (str) => {
  if (str.length === 2) return 1;
  let score = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === '(') {
      if (str[i + 1] === '(') {
        let openCount = 1;
        let closeCount = 0;
        let j = i + 1;
        while (openCount !== closeCount ) {
          if (str[j] === '(') {
            openCount++;
          } else {
            closeCount++;
          }
          j++;
        }

        const tmp = str.slice(i + 1, j - 1);
        score += 2 * scoreOfParentheses(tmp);
        i = j - 1;
      }
    } else {
      score += 1;
    }
  }

  return score;
};

console.log(scoreOfParentheses('(()())()((()))'));
