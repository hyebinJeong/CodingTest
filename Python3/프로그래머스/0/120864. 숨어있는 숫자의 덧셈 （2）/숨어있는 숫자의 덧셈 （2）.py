def solution(my_string):
    answer = 0
    cur_num = ""
    
    for ch in my_string:
        if ch.isdigit():
            cur_num += ch
        else:
            if cur_num:
                answer += int(cur_num)
                cur_num = ""
                
    if cur_num:
        answer += int(cur_num)
    return answer