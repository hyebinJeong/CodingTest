import math

def solution(num_list):
    return 1 if math.prod(num_list) < sum(num_list) * sum(num_list) else 0