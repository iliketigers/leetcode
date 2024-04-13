# https://leetcode.com/problems/minimum-size-subarray-sum/description/
# Given an array of positive integers nums and a positive integer target, return the minimal 
# length of a subarray whose sum is greater than or equal to target. If there is no such subarray, 
# return 0 instead.

# Example 1:
# Input: target = 7, nums = [2,3,1,2,4,3]
# Output: 2
# Explanation: The subarray [4,3] has the minimal length under the problem constraint.

# Example 2:
# Input: target = 4, nums = [1,4,4]
# Output: 1

# Example 3:
# Input: target = 11, nums = [1,1,1,1,1,1,1,1]
# Output: 0

class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        # pretty sure this is valid but it's time limit exceeded for huge test cases.
        # subarray = []
        # subarray_length = len(nums)
        
        # # base case
        # if sum(nums) < target:
        #     return 0
        # for i, inum in enumerate(nums):
        #     subarray = []
        #     for j, jnum in enumerate(nums[i:]):
        #         subarray.append(jnum)
        #         if sum(subarray) >= target:
        #             subarray_length = min(len(subarray), subarray_length)
        # return subarray_length
 
        # this is adapted from the editorial solution.
        ans = sum(nums)
        left = 0
        zum = 0
        for i, num in enumerate(nums):
            zum += num
            while zum >= target:
                ans = min(ans, i+1-left)
                zum -= nums[left]
                left += 1
        return ans if ans != sum(nums) else 0
