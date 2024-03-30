# https://leetcode.com/problems/roman-to-integer/


class Solution:
    def romanToInt(self, s: str) -> int:
        vals = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000,
        }
        result = 0
        skip = False
        for i, letter in enumerate(s):
            if skip:
                skip = False
                continue
            x = vals[letter]
            if i < len(s) - 1:
                y = vals[s[i + 1]]
            else:
                y = 0

            if y > x:
                result += y - x
                skip = True
            else:
                result += x
        return result
