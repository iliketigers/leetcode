# https://leetcode.com/problems/two-sum/description/


# brute force
class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        for i, inum in enumerate(nums):
            for j, jnum in enumerate(nums):
                if i != j and target == jnum + inum:
                    return [i, j]


# two-pass hash table
class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        index_by_num = {num: i for i, num in enumerate(nums)}
        for i, num in enumerate(nums):
            complement = target - num
            hasKey = complement in index_by_num
            value = index_by_num.get(complement)
            if hasKey and i != value:
                return [i, value]


# one-pass hash table
class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        index_by_num = {}
        for i, num in enumerate(nums):
            complement = target - num
            hashedIndex = index_by_num.get(complement)
            check = complement in index_by_num and hashedIndex != i
            if check:
                return [hashedIndex, i]
            index_by_num[num] = i
