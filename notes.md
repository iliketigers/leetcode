# hash tables
* data structure that pairs keys to values
* takes _key input_ and runs it thru a hash function
  * matches strings to numbers, usually the index
  * two strings mapped to the same number causes a collision
  * hash function runs the same function against every input, and outputs a hash value, which is stored in a set bucket.
  * buckets are pre-determined