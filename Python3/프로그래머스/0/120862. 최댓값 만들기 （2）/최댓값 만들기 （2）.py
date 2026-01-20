def solution(numbers):
    sorted_num = sorted(numbers)
    max_num = sorted_num[-1] * sorted_num[-2]
    min_num = sorted_num[0] * sorted_num[1]
    return max(max_num, min_num)