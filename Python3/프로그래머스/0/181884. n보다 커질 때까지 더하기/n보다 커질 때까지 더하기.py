from itertools import accumulate

def solution(numbers, n):
    for num in accumulate(numbers):
        if num > n:
            return num