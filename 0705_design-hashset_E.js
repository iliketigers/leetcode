/**
 * Initialize your data structure here.
 */
class MyHashSet {
  constructor() {
    this.hashSet = Array(10);
    for (let i = 0; i < this.hashSet.length; i++) {
      this.hashSet[i] = [];
    }
  }

  hashInput = (key) => {
    // perform randomizing calculation on input
    // convert input into numbers
    // modulo it by the number of buckets
    return key % 10;
  };

  contains = (key) => {
    const index = this.hashInput(key);
    const bucket = this.hashSet[index];
    const i = bucket.findIndex((e) => e === key);
    if (i >= 0) {
      return true;
    } else {
      return false;
    }
    // look in bucket for key
    // match values to key
    // return T/F
  };

  add = (key) => {
    // check if contains
    // if yes, don't do anything
    // if no, push input
    const index = this.hashInput(key);
    const bucket = this.hashSet[index];
    const i = bucket.findIndex((e) => e === key);
    const contains = this.contains(key);
    if (!contains) {
      bucket.push(key);
    }
  };

  remove = (key) => {
    const index = this.hashInput(key);
    const bucket = this.hashSet[index];
    const i = bucket.findIndex((e) => e === key);
    const contains = this.contains(key);
    if (contains) {
      bucket.splice(i, 1);
    }
    // if no, do nothing
    // if yes, splice the item out of the array
  };
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
