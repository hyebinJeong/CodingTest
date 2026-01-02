def solution(myString):
    parts = myString.split('x')
    print(parts)
    answer = [len(p) for p in parts]
    return answer