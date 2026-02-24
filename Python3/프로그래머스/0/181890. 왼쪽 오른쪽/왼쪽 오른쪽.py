def solution(str_list):
    answer = []
    for i, val in enumerate(str_list):
        if val == "l":
            return str_list[:i]
        elif val == "r":
            return str_list[i+1:]
    return answer