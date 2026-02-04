def solution(s):
    once = []
    
    for ch in s:
        if ch in once:
            once.remove(ch)
        elif s.count(ch) == 1:
            once.append(ch)
    
    once.sort()
    return ''.join(once)