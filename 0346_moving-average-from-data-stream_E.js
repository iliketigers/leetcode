// https://leetcode.com/problems/moving-average-from-data-stream/

// Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

// Implement the MovingAverage class:

// MovingAverage(int size) Initializes the object with the size of the window size.
// double next(int val) Returns the moving average of the last size values of the stream.

/**
 * Initialize your data structure here.
 * @param {number} size
 */
class MovingAverage {
  constructor(size) {
    this.window = Array(size).fill(0);
    this.count = 0;
    this.result = 0;
  }

  /**
   * @param {number} val
   * @return {number}
   */
  next = (val) => {
    // add new value
    this.window.shift();
    this.window.push(val);
    this.count += 1;
    // find average
    let sum = 0;
    this.window.forEach((e) => {
      sum += e;
    });
    if (this.count >= this.window.length) {
      return sum / this.window.length;
    } else {
      return sum / this.count;
    }
  };
}

const obj = new MovingAverage(3);
console.log(obj.next(1));
console.log(obj.next(2)); // 1.5
console.log(obj.next(3)); // 2
console.log(obj.next(4)); // 3
console.log(obj.next(5)); // 4
console.log(obj.next(6)); // 5
console.log(obj.next(7)); // 6

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
