def solution(array):
    array_str = ''.join(str(num) for num in array)
    return array_str.count('7')