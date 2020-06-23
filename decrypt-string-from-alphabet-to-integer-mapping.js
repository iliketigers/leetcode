/**
 * @param {string} s
 * @return {string}
 */
const freqAlphabets = function (s) {
  const arr = s.split('').reverse();
  let ones = false;
  let tens = false;
  let arrTwo = [];
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let output = '';

  arr.forEach((char, i) => {
    if (char === '#' && !ones && !tens) {
      arrTwo.push(arr[i + 2] + arr[i + 1]);
      ones = true;
      tens = true;
    } else if (char !== '#' && ones) {
      ones = false;
    } else if (char !== '#' && tens) {
      tens = false;
    } else if (char !== '#' && !ones && !tens) {
      arrTwo.push(char);
    }
  });

  arrTwo = arrTwo.reverse();
  arrTwo.forEach((element) => {
    output += alphabet[element - 1];
  });
  return (output);
};

freqAlphabets('10#11#12');
