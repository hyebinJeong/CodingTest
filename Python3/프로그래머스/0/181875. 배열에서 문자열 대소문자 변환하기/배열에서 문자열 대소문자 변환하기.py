def solution(strArr):
    answer = []
    for index, item in enumerate(strArr):
        if index % 2 == 0:
            answer.append(item.lower())
        else:
            answer.append(item.upper())
    return answer