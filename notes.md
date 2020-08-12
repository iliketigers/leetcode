# hash tables
* data structure that pairs keys to values
* takes _key input_ and runs it thru a hash function
  * matches strings to numbers, usually the index
  * two strings mapped to the same number causes a collision
  * hash function runs the same function against every input, and outputs a hash value, which is stored in a set bucket.
  * buckets are pre-determined

# launch.json
* need to add `"outputCapture" : "std"` to get the debug to work right

# optimizations
* `foreach` can't be broken; need to do a regular `for` or `while` loop or else it will return `undefined`
* if want to return `true` or `false`, just return the expression

# linked lists
  ```js
  function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
  ```
* `next` is the node, `val` is just whatever value (not a node)
* to replace need to do `ll = ll.next`
* https://leetcode.com/problems/merge-two-sorted-lists/
* useful because they only take up the space they take up, vs arrays which also store their length. also don't need to know the length beforehand.
* `head` only knows its own value and whether `next` exists, it can't see down the chain at all
* see notes_linked-list for a constructor

# recursion
* must have a base case

# `this` and scope
* http://www.digital-web.com/articles/scope_in_javascript/
* either refers to the window (global) or if in a function, refers to the instance of the function.
```js
var ima_celebrity = "Everyone can see me! I'm famous!", // global
  the_president = "I'm the decider!";

function pleasantville() {
  var the_mayor = 'I rule Pleasantville with an iron fist!', // global w/i function
  ima_celebrity = 'All my neighbors know who I am!';

  function lonely_house() {
    var agoraphobic = 'I fear the day star!', // inaccessible from others 
      a_cat = 'Meow.';
  }
}

```

# accessing by value vs reference
* when assigning a value to a variable, the behavior is different depending on if it's a primitive or an object
* primitives manipulate the actual value
* when you work on an object, you're working on a *reference* to the object
* function arguments use references in order to pass stuff in