#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'miniMaxSum' function below.
#
# The function accepts INTEGER_ARRAY arr as parameter.
#

# I had to implement a Python deep copy because I don't think I can import libraries in HackerRank...?
def deepCopy(arr):
    new_arr = []
    for element in arr:
        new_arr.append(element)
    return new_arr

def miniMaxSum(arr):
    max_sum = 0
    min_sum = pow(10, 15) # input restriction is 10^9 and this should cover really edgy cases
    for i in range(0, len(arr)):
        arr_copy = deepCopy(arr)
        # pops one element at a time and compares the
        arr_copy.pop(i)
        current_sum = 0
        for n in arr_copy:
            current_sum += n
        if current_sum > max_sum:
            max_sum = current_sum
        if current_sum < min_sum:
            min_sum = current_sum
    print("{0} {1}".format(min_sum, max_sum))

if __name__ == '__main__':

    arr = list(map(int, input().rstrip().split()))

    miniMaxSum(arr)
