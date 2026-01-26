import math

def solution(n):
    x = int(math.sqrt(n))
    return (x+1)*(x+1) if x * x == n else -1