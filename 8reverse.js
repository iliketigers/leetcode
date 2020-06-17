const reverse = function (x) {
  let reversed = Math.abs(x).toString().split('').reverse().join('');
  reversed *= Math.sign(x)

  if (Math.abs(reversed) > Math.pow(2, 31)) {
    return 0;
  } else {
    return reversed;
  }
};

console.log(reverse(123)); // 321
console.log(reverse(9000000)); // 9
console.log(reverse(-123)); // -321
console.log(reverse(1534236469)); // 0