def solution(my_string):
    
    answer = [0] * 52  # A-Z + a-z
    
    for ch in my_string:
        
        if 'A' <= ch <= 'Z':
            idx = ord(ch) - ord('A')
            answer[idx] += 1
            
        else:
            idx = ord(ch) - ord('a') + 26
            answer[idx] += 1
            
    return answer
