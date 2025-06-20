# Title: 1071. Greatest Common Divisor of Strings
# Difficulty: Easy

# For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).
# Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

# Example 1:
# Input: str1 = "ABCABC", str2 = "ABC"
# Output: "ABC"

# Example 2:
# Input: str1 = "ABABAB", str2 = "ABAB"
# Output: "AB"

# Example 3:
# Input: str1 = "LEET", str2 = "CODE"
# Output: ""

# Constraints:
# 1 <= str1.length, str2.length <= 1000
# str1 and str2 consist of English uppercase letters.

class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        len1, len2 = len(str1), len(str2)

        def isDivisor(i):
            if(len1%i or len2%i):
                return False
            else:
                f1, f2 = len1//i, len2//i
                return str1[:i]*f1==str1 and str1[:i]*f2==str2

        for i in range(min(len1, len2), 0, -1):
            if isDivisor(i):
                return str1[:i]
        return ""