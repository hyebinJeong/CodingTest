def solution(numbers):
    answer = 0
    range_nums = [1,2,3,4,5,6,7,8,9]
    for i in range_nums:
        if i not in numbers:
            answer += i
    return answer