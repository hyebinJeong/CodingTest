def solution(a, b):
    answer = 0
    plus_ab = int(str(a) + str(b))
    return plus_ab if plus_ab >= 2 * a * b else 2 * a * b 