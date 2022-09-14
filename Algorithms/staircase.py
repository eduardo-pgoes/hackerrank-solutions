#!/bin/python3
# https://www.hackerrank.com/challenges/staircase
import math
import os
import random
import re
import sys

#
# Complete the 'staircase' function below.
#
# The function accepts INTEGER n as parameter.
#

def staircase(n):
    for i in range(0, n):
        str_print = ''
        for j in range(0, n):
            if (i + j >= n-1):
                str_print += "#"
            else:
                str_print += " "
        print(str_print)

if __name__ == '__main__':
    n = int(input().strip())

    staircase(n)
