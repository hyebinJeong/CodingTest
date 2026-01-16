def solution(s):
    answer = []
    idx = 0
    
    for ch in s:
        if ch == ' ':
            answer.append(' ')
            idx = 0
        else:
            if idx % 2 == 0:
                answer.append(ch.upper())
            else:
                answer.append(ch.lower())
            idx += 1
        pass
    return "".join(answer)