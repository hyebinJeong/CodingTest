def solution(s):
    once = []
    dup = []
    
    for ch in s:
        if ch in dup:
            continue
        elif ch in once:
            once.remove(ch)
            dup.append(ch)
        else:
            once.append(ch)
    once.sort()
    return ''.join(once)