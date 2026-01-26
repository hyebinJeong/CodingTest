def solution(d, budget):
    answer = 0
    sorted_d = sorted(d)
    sum_d = 0
    
    for i in sorted_d:
        sum_d += i
        answer += 1
        if sum_d > budget:
            return answer -1
    return answer