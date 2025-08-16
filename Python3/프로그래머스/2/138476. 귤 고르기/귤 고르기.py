from collections import Counter

def solution(k, tangerine):
    counter = Counter(tangerine)
    sizes = sorted(counter.values(), reverse=True)
    
    count, answer = 0, 0
    
    for size in sizes:
        count += size
        answer += 1
        if count >= k:    
            return answer