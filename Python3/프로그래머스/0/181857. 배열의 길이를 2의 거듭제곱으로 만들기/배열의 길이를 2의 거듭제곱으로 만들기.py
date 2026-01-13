def solution(arr):
    answer = arr[:]
    for n in range(11):
        if len(answer) <= 2 ** n:
            answer += [0] * ((2 ** n) - len(answer))
            return answer