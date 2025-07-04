from itertools import permutations

def solution(numbers):
    nums = set()
    for i in range(1, len(numbers)+1):
        for p in permutations(numbers, i):
            nums.add(int(''.join(p)))
    return sum(1 for x in nums if is_prime(x))

def is_prime(n):
    return n > 1 and all(n % i for i in range(2, int(n**0.5)+1))