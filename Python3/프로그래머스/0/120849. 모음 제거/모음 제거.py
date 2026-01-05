def solution(my_string):
    answer = ''
    for i in my_string:
        if i not in ['a','i','o','u','e']:
            answer += i
    return answer