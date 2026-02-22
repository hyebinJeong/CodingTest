def solution(a, b, c):
    if a == b and b == c and a ==c:
        return (a + b + c) * (a*a + b*b + c*c) * (a*a*a + b*b*b + c*c*c)
    elif a != b and a != c and c != b:
        return a + b + c
    elif (a != b and a == c) or (a != c and a == b) or (b != c and a == b) or (a != b and b == c):
        return (a + b + c) * (a*a + b*b + c*c)