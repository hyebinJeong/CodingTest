def solution(A, B):
    if len(A) != len(B):
        return -1
    
    k = (B + B).find(A)
    return k if k != -1 else -1