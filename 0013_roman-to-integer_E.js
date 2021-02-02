// https://leetcode.com/problems/roman-to-integer/
// Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  const numeralValues = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000, };
  let result = 0;
  s = s.split('').reverse().join('');

  for (let i = 0; i < s.length; i++) {
    let chunk = false;
    console.log(s[i + 1] + s[i]);
    if (s[i + 1]) {
      if ((s[i + 1] + s[i]).match(/(IV|IX|XL|XC|CD|CM)/g)) {
        result = result - numeralValues[s[i + 1]];
        result += numeralValues[s[i]];
        i++;
        chunk = true;
      } else {
        result += numeralValues[s[i]];
        chunk = false;
      }
    } else if (!chunk) {
      result += numeralValues[s[i]];
    }
  };
  return result;
};

// console.log(romanToInt("DCXXI")); // 621: 1 + 10 + 10 + 100 + 500
// console.log(romanToInt('III')); // 3: 1+1+1
// console.log(romanToInt('IX')); // 9: 10 - 1
// console.log(romanToInt('LVIII')); // 58: 1 + 1 + 1 + 5 + 50
// console.log(romanToInt('MCMXCIV')); // 1994: 5 - 1 + 100 - 10 + 1000 - 100 + 1000