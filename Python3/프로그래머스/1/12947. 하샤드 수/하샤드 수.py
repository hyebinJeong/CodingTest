def solution(x):
    answer = True
    nums = list(str(x))
    return True if x % sum(int(num) for num in nums) == 0 else False