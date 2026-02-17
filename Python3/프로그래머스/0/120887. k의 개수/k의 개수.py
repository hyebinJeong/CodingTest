def solution(i, j, k):
    target = str(k)
    return sum(str(n).count(target) for n in range(i, j + 1))