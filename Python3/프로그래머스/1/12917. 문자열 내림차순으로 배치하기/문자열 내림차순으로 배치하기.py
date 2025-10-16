def solution(s):
    sorted_list = sorted(s, reverse=True)
    return ''.join(sorted_list)