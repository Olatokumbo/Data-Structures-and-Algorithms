# Title: 1493. Longest Subarray of 1's After Deleting One Element
# Difficulty: Medium

# Given a binary array nums, you should delete one element from it.
# Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

# Example 1:
# Input: nums = [1,1,0,1]
# Output: 3
# Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.

# Example 2:
# Input: nums = [0,1,1,1,0,1,1,0,1]
# Output: 5
# Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].

# Example 3:
# Input: nums = [1,1,1]
# Output: 2
# Explanation: You must delete one element.

# Constraints:
# 1 <= nums.length <= 105
# nums[i] is either 0 or 1.

class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        maxNum = 0
        left = 0
        numZeros = 0
        for right in range(len(nums)):
            if nums[right]==0:
                numZeros+=1
            
            while(numZeros > 1):
                if nums[left]==0:
                    numZeros-=1
                left+=1
            maxNum = max(maxNum, right - left)
        return maxNum