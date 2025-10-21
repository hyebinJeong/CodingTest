def solution(num_list, n):
    answer1 = num_list[:n]
    answer2 = num_list[n:]
    
    return answer2 + answer1