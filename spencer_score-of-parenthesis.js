
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
