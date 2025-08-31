def solution(num, total):
    start = total // num - (num - 1) // 2
    return [start + i for i in range(num)]