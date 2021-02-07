// 14:01 -> 14:30

/**
 * Initialize your data structure here.
 */
const MyHashMap = function () {
  this.storage = [];
};

const hash = (value) => {
  let index = 0;
  for (let i = 0; i < value.toString().length; i++) {
    index += value.toString().charCodeAt(i);
  }
  return index % 10;
};

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  const index = hash(key);
  var tuple = [key, value];
  var bucket = this.storage[index];
  let found = false;
  if (bucket) {
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] == key) {
        bucket[i][1] = value;
        found = true;
      }
    }
    if (!found) {
      bucket.push(tuple);
    }
  } else {
    this.storage[index] = [tuple];
  }
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const x = hash(key);
  const exists = this.storage[x];
  if (!exists) {
    return -1;
  }
  if (exists) {
    for (i = 0; i < this.storage[x].length; i++) {
      if (this.storage[x][i][0] == key) {
        return this.storage[x][i][1];
      }
    }
    return -1;
  }
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  const index = hash(key);
  var bucket = this.storage[index];

  if (!bucket) {
    return -1;
  } else {
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] == key) {
        bucket.splice(i, 1);
      }
    }
  }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

var obj = new MyHashMap();

obj.remove(27);
obj.put(65, 65);
obj.remove(19);
obj.remove(0);
obj.get(18);
obj.remove(3);
obj.put(42, 0);
obj.get(19);
obj.remove(42);
obj.put(17, 90);
obj.put(31, 76);
obj.put(48, 71);
obj.put(5, 50);
obj.put(7, 68);
obj.put(73, 74);
obj.put(85, 18);
obj.put(74, 95);
obj.put(84, 82);
obj.put(59, 29);
obj.put(71, 71);
obj.remove(42);
obj.put(51, 40);
obj.put(33, 76);
obj.get(17);
obj.put(89, 95);
obj.get(95);
obj.put(30, 31);
obj.put(37, 99);
obj.get(51);
obj.put(95, 35);
obj.remove(65);
obj.remove(81);
obj.put(61, 46);
obj.put(50, 33);
obj.get(59);
obj.remove(5);
obj.put(75, 89);
obj.put(80, 17);
obj.put(35, 94);
obj.get(80);
obj.put(19, 68);
obj.put(13, 17);
obj.remove(70);
obj.put(28, 35);
obj.remove(99);
obj.remove(37);
obj.remove(13);
obj.put(90, 83);
obj.remove(41);
obj.get(50);
obj.put(29, 98);
obj.put(54, 72);
obj.put(6, 8);
obj.put(51, 88);
obj.remove(13);
obj.put(8, 22);
obj.get(85);
obj.put(31, 22);
obj.put(60, 9);
obj.get(96);
obj.put(6, 35);
obj.remove(54);
obj.get(15);
obj.get(28);
obj.remove(51);
obj.put(80, 69);
obj.put(58, 92);
obj.put(13, 12);
obj.put(91, 56);
obj.put(83, 52);
obj.put(8, 48);
obj.get(62);
obj.get(54);
obj.remove(25);
obj.put(36, 4);
obj.put(67, 68);
obj.put(83, 36);
obj.put(47, 58);
obj.get(82);
obj.remove(36);
obj.put(30, 85);
obj.put(33, 87);
obj.put(42, 18);
obj.put(68, 83);
obj.put(50, 53);
obj.put(32, 78);
obj.put(48, 90);
obj.put(97, 95);
obj.put(13, 8);
obj.put(15, 7);
obj.remove(5);
obj.remove(42);
obj.get(20);
obj.remove(65);
obj.put(57, 9);
obj.put(2, 41);
obj.remove(6);
obj.get(33);
obj.put(16, 44);
obj.put(95, 30);
