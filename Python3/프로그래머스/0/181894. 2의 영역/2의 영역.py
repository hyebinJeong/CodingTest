def solution(arr):
    try:
        first = arr.index(2)
    except ValueError:
        return [-1]
    last = first
    for i in range(len(arr) - 1, first - 1, -1):
        if arr[i] == 2:
            last = i
            break
    return arr[first:last + 1]