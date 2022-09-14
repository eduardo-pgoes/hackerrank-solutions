#!/bin/python3
# https://www.hackerrank.com/challenges/diagonal-difference
import math
import os
import random
import re
import sys

#
# Complete the 'diagonalDifference' function below.
#
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY arr as parameter.
#

def diagonalDifference(arr):
    return abs(primaryDiagonalSum(arr)-secondaryDiagonalSum(arr))

def primaryDiagonalSum(arr):
    sum = 0
    for i in range(0, len(arr)):
        sum += arr[i][i]   
    return sum

def secondaryDiagonalSum(arr):
    sum = 0
    for i in range(0, len(arr)):
        for j in range(0, len(arr)):
            if (i + j == len(arr)-1):
                sum += arr[i][j]
    return sum

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    arr = []

    for _ in range(n):
        arr.append(list(map(int, input().rstrip().split())))

    result = diagonalDifference(arr)

    fptr.write(str(result) + '\n')

    fptr.close()
