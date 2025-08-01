# Title: 151. Reverse Words in a String
# Difficulty: Medium

# Given an input string s, reverse the order of the words.
# A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
# Return a string of the words in reverse order concatenated by a single space.
# Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

# Example 1:
# Input: s = "the sky is blue"
# Output: "blue is sky the"

# Example 2:
# Input: s = "  hello world  "
# Output: "world hello"
# Explanation: Your reversed string should not contain leading or trailing spaces.

# Example 3:
# Input: s = "a good   example"
# Output: "example good a"
# Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.


# Constraints:
# 1 <= s.length <= 104
# s contains English letters (upper-case and lower-case), digits, and spaces ' '.
# There is at least one word in s.


class Solution:
    def reverseWords(self, s: str) -> str:
        cleaned = s.strip().split()
        return " ".join(reversed(cleaned))
    
class Solution:
    def reverseWords(self, s: str) -> str:
        cleanedText = s.strip().split()
        left = 0
        right = len(cleanedText) - 1

        while(right>left):
            cleanedText[right], cleanedText[left] = cleanedText[left], cleanedText[right]
            right-=1
            left+=1
        
        return " ".join(cleanedText)         
        
