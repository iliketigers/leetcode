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