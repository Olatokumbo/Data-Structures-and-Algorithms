# Title: 1679. Max Number of K-Sum Pairs
# Difficulty: Medium

# You are given an integer array nums and an integer k.
# In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.
# Return the maximum number of operations you can perform on the array.

# Example 1:
# Input: nums = [1,2,3,4], k = 5
# Output: 2
# Explanation: Starting with nums = [1,2,3,4]:
# - Remove numbers 1 and 4, then nums = [2,3]
# - Remove numbers 2 and 3, then nums = []
# There are no more pairs that sum up to 5, hence a total of 2 operations.

# Example 2:
# Input: nums = [3,1,3,4,3], k = 6
# Output: 1
# Explanation: Starting with nums = [3,1,3,4,3]:
# - Remove the first two 3's, then nums = [1,4,3]
# There are no more pairs that sum up to 6, hence a total of 1 operation.

# Constraints:
# 1 <= nums.length <= 105
# 1 <= nums[i] <= 109
# 1 <= k <= 109

class Solution:
    def maxOperations(self, nums: List[int], k: int) -> int:
        operations = 0
        hashMap = {}

        for num in nums:
            remainder = k-num
            if hashMap.get(remainder, 0) > 0:
                operations+=1
                hashMap[remainder]-=1
            else:
                hashMap[num] = hashMap.get(num, 0)+1

        return operations
    
class Solution:
    def equalPairs(self, grid: List[List[int]]) -> int:
        hash_map = {}
        pairs = 0

        for row in grid:
            number = tuple(row)
            hash_map[number] = hash_map.get(number, 0)+1

        for col in range(len(grid)):
            column = tuple(grid[r][col] for r in range(len(grid)))
            if column in hash_map:
                pairs+=hash_map[column]

        return pairs