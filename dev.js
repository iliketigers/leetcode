const fibonacci = (n) => {
  if (n <= 1) { return 1; }
  debugger;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(5));

// 3: 1 1 2
// 1, curr: 1
// 1, curr: 1 += 0
// 1+1, curr: 1 += 1
// 2+1, curr: next = 2
// 7: 1 1 2 3 5 8 13
// 1, 1, 2+1, 3+2, 5+3, 8+5
