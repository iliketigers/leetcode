# https://leetcode.com/problems/reverse-integer/

from math import copysign


class Solution(object):
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        reversed = int(str(abs(x))[::-1])

        if abs(reversed) > 2**31:
            return 0
        else:
            v = int(copysign(1, x))
            if v == -1:
                return -1 * reversed
            else:
                return abs(reversed)
