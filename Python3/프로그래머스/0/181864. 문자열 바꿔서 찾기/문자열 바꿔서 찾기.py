def solution(myString, pat):
    changed = ''.join(['B' if ch == 'A' else 'A' for ch in myString])
    return 1 if pat in changed else 0