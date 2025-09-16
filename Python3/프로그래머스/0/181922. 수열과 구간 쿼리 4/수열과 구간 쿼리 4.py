def solution(arr, queries):
    for s, e, k in queries:
        if k  == 0:
            for i in range(s, e + 1):
                arr[i] += 1
        else:
            start = ((s + k - 1) // k) * k
            for i in range(start, e + 1, k):
                arr[i] += 1
    return arr