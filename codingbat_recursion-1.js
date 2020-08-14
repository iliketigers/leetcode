// https://codingbat.com/java/Recursion-1

// factorial
// Given n of 1 or more, return the factorial of n, which is n * (n-1) * (n-2) ... 1. Compute the result recursively (without loops).
const factorial = (n) => {
  if (n === 1) { return 1; }
  return factorial(n - 1) * n;
};

// bunnyEars
// We have a number of bunnies and each bunny has two big floppy ears. We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).
const bunnyEars = (n) => {
  if (n === 0) { return 0; }
  return 2 + bunnyEars(n - 1);
};

// fibonacci
// The fibonacci sequence is a famous bit of mathematics, and it happens to have a recursive definition. The first two values in the sequence are 0 and 1 (essentially 2 base cases). Each subsequent value is the sum of the previous two values, so the whole sequence is: 0, 1, 1, 2, 3, 5, 8, 13, 21 and so on. Define a recursive fibonacci(n) method that returns the nth fibonacci number, with n=0 representing the start of the sequence.
const fibonacci = (n) => {
  if (n === 0) {
    return 0;
  }
  else if (n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// bunnyEars2
// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say have 3 ears, because they each have a raised foot. Recursively return the number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).
const bunnyEars2 = (n) => {
  if (n === 0) { return 0; }
  if (n % 2 === 1) {
    return 2 + bunnyEars2(n - 1);
  }
  return 3 + bunnyEars2(n - 1);
};

// triangle
// We have triangle made of blocks. The topmost row has 1 block, the next row down has 2 blocks, the next row has 3 blocks, and so on. Compute recursively (no loops or multiplication) the total number of blocks in such a triangle with the given number of rows.
const triangle = (n) => {
  if (n === 0) { return 0; }
  return n + triangle(n - 1);
};

// sumDigits
// Given a non-negative int n, return the sum of its digits recursively (no loops). Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).
const sumDigits = (n) => {
  if (n === 0) { return 0; }
  return n % 10 + sumDigits(Math.floor(n / 10));
};

// count7
// Given a non-negative int n, return the count of the occurrences of 7 as a digit, so for example 717 yields 2. (no loops). Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).
const count7 = (n) => {
  if (!n) { return 0; }
  const x = n % 10;
  const y = Math.floor(n / 10);
  if (n % 10 === 7) {
    return 1 + count7(Math.floor(n / 10));
  } else {
    return count7(Math.floor(n / 10));
  }
};

// count8
// Given a non-negative int n, compute recursively (no loops) the count of the occurrences of 8 as a digit, except that an 8 with another 8 immediately to its left counts double, so 8818 yields 4. Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).
const count8 = (n) => {
  if (n === 0) { return 0; }
  const lastDigit = n % 10;
  const lastTwoDigits = n % 100;
  const nModuloTen = Math.floor(n / 10);
  if (lastDigit === 8 && lastTwoDigits === 88) {
    return 2 + count8(nModuloTen);
  } else if (lastDigit === 8 && lastTwoDigits != 88) {
    return 1 + count8(nModuloTen);
  }
  return count8(nModuloTen);
};

// powerN
// Given base and n that are both 1 or more, compute recursively (no loops) the value of base to the n power, so powerN(3, 2) is 9 (3 squared).
const powerN = (n, p) => {
  if (p < 1) { return 1; }
  return n * (powerN(n, p - 1));
};

// countX
//Given a string, compute recursively (no loops) the number of lowercase 'x' chars in the string.
const countX = (str) => {
  if (!str) { return 0; }
  let index = str.length - 1;
  if (str.charAt(index) === 'x') {
    return 1 + countX(str.substring(0, index));
  }
  return countX(str.substring(0, index));
};

// countHi
// Given a string, compute recursively (no loops) the number of times lowercase "hi" appears in the string.
const countHi = (str) => {
  if (!str) { return 0; }
  let index = str.length - 1;
  if (str.substring(index - 2, index) === 'hi') {
    str = str.substring(0, index);
    return 1 + countHi(str);
  } else {
    str = str.substring(0, index);
    return countHi(str);
  }
};

// changeXY
// Given a string, compute recursively (no loops) a new string where all the lowercase 'x' chars have been changed to 'y' chars.

const changeXY = (str) => {
  if (str.length === 0) { return str; }
  if (str.charAt(0) === 'x') {
    return 'y' + changeXY(str.substring(1));
  }
  return str.charAt(0) + changeXY(str.substring(1));
};

// changePi
// Given a string, compute recursively (no loops) a new string where all appearances of "pi" have been replaced by "3.14".
const changePi = (str) => {
  if (str.length === 0) { return str; }
  if (str.charAt(0) === 'p' && str.charAt(1) === 'i') {
    return '3.14' + changePi(str.substring(2));
  } else {
    return str.charAt(0) + changePi(str.substring(1));
  }
};

// noX
// Given a string, compute recursively a new string where all the 'x' chars have been removed.
const noX = (str) => {
  if (str.length === 0) { return str; }
  if (str.charAt(0) === 'x') {
    return noX(str.substring(1));
  }
  return str.charAt(0) + noX(str.substring(1));
};

// array6
// Given an array of ints, compute recursively if the array contains a 6. We'll use the convention of considering only the part of the array that begins at the given index. In this way, a recursive call can pass index+1 to move down the array. The initial call will pass in index as 0.
const array6 = (arr, i) => {
  if (i === arr.length) { return false; };
  if (arr[i] === 6) {
    return true;
  }
  return array6(arr, i + 1);
};


// array11
// Given an array of ints, compute recursively the number of times that the value 11 appears in the array. We'll use the convention of considering only the part of the array that begins at the given index. In this way, a recursive call can pass index+1 to move down the array. The initial call will pass in index as 0.
const array11 = (arr, i) => {
  if (i === arr.length) { return 0; };
  if (arr[i] === 11) {
    return 1 + array11(arr, i + 1);
  }
  return array11(arr, i + 1);
};

// array220
// Given an array of ints, compute recursively if the array contains somewhere a value followed in the array by that value times 10. We'll use the convention of considering only the part of the array that begins at the given index. In this way, a recursive call can pass index+1 to move down the array. The initial call will pass in index as 0.
const array220 = (arr, i) => {
  if (i === arr.length) { return false; };
  if (arr[i] * 10 === arr[i + 1]) {
    return true;
  }
  return array220(arr, i + 1);
};

// allStar 
// Given a string, compute recursively a new string where all the adjacent chars are now separated by a "*".
const allStar = (str) => {
  if (str.length === 0) { return str; }
  if (str.length === 1) {
    return str.charAt(0) + allStar(str.substring(1));
  }
  return str.charAt(0) + '*' + allStar(str.substring(1));
};

// pairStar
// Given a string, compute recursively a new string where identical chars that are adjacent in the original string are separated from each other by a "*".
const pairStar = (str) => {
  if (str.length === 0) { return str; }
  let index = 0;
  if (str.charAt(index) === str.charAt(index + 1)) {
    return str.charAt(index) + '*' + pairStar(str.substring(1));
  }
  return str.charAt(index) + pairStar(str.substring(1));
};

// endX
// Given a string, compute recursively a new string where all the lowercase 'x' chars have been moved to the end of the string.
const endX = (str) => {
  let index = 0;
  if (str === '') { return str; }
  if (str.charAt(index) === 'x') {
    return endX(str.substring(1)) + 'x';
  };
  return str.charAt(index) + endX(str.substring(1));
};

// countPairs
// countAbc
// count11
// stringClean
// countHi2
// parenBit
// nestParen
// strCount
// strCopies
// strDist