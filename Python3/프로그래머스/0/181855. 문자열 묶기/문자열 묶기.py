def solution(strArr):
    lengths = [len(s) for s in strArr]
    result = 0
    for i in set(lengths):
        count = lengths.count(i)
        result = max(result, count)
    return result