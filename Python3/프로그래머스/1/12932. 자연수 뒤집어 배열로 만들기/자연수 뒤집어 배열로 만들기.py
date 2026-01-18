def solution(n):
    reverse_n_array = list(str(n))[::-1]
    return list(map(int,reverse_n_array))