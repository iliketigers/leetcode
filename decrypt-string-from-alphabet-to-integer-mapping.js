/**
 * @param {string} s
 * @return {string}
 */
const freqAlphabets = function(s) {
  const arr = s.split('').reverse();
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let isHashed = 0;
  let arrTwo = [];
  let output = '';

  arr.forEach((char, i) => {
    if (char === '#' && !isHashed) {
      arrTwo.push(arr[i + 2] + arr[i + 1]);
      isHashed = 2;
    } else if (char !== '#' && isHashed) {
      isHashed--;
    } else if (char !== '#' && !isHashed) {
      arrTwo.push(char);
    }
  });

  arrTwo = arrTwo.reverse();
  arrTwo.forEach((element) => {
    output += alphabet[element - 1];
  });
  return (output);
};
