# https://leetcode.com/problems/two-sum/description/


# brute force
class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        for i, inum in enumerate(nums):
            for j, jnum in enumerate(nums):
                if i != j:
                    if (target - nums[i]) == nums[j]:
                        return [i, j]


# two-pass hash table
class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        mapOfNumsAndTheirIndexes = {}
        for i, num in enumerate(nums):
            mapOfNumsAndTheirIndexes[num] = i
        for i, num in enumerate(nums):
            complement = target - nums[i]
            hasKey = mapOfNumsAndTheirIndexes.has_key(complement)
            value = mapOfNumsAndTheirIndexes.get(complement)
            if hasKey and i != value:
                return [i, value]


# one-pass hash table
class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        mapOfNumsAndTheirIndexes = {}
        for i, num in enumerate(nums):
            complement = target - num
            hashedIndex = mapOfNumsAndTheirIndexes.get(complement)
            check = mapOfNumsAndTheirIndexes.has_key(complement) and hashedIndex != i
            if check:
                return [hashedIndex, i]
            mapOfNumsAndTheirIndexes[num] = i
