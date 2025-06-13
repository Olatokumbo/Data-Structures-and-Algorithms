# Title: 345. Reverse Vowels of a String
# Difficulty: Easy

# Given a string s, reverse only all the vowels in the string and return it.
# The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

# Example 1:
# Input: s = "IceCreAm"
# Output: "AceCreIm"
# Explanation:
# The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

# Example 2:
# Input: s = "leetcode"
# Output: "leotcede"

# Constraints:
# 1 <= s.length <= 3 * 105
# s consist of printable ASCII characters.

class Solution:
    def reverseVowels(self, s: str) -> str:
        def isVowel(string: str):
            return string.lower() in "aeiou"

        left = 0
        right = len(s)-1
        my_list = list(s)

        while(left<right):
            while(left<right and not isVowel(my_list[left])):
                left+=1
            while(left<right and not isVowel(my_list[right])):
                right-=1
            my_list[left], my_list[right] = my_list[right], my_list[left]
            left+=1
            right-=1

        return "".join(my_list)