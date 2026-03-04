from collections import deque

def solution(begin, target, words):
    
    if target not in words:
        return 0

    def one_letter_diff(a, b):
        diff = 0
        for x, y in zip(a, b):
            if x != y:
                diff += 1
        return diff == 1

    q = deque()
    q.append((begin, 0))

    visited = set()

    while q:
        cur, steps = q.popleft()

        if cur == target:
            return steps

        for w in words:
            if w not in visited and one_letter_diff(cur, w):
                visited.add(w)
                q.append((w, steps + 1))
    return 0