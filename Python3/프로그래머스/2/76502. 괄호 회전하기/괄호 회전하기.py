from collections import deque

def is_valid(s):
    stack = deque()
    for ch in s:
        if ch in '([{':
            stack.append(ch)  
        else:
            if not stack:
                return False
            top = stack.pop()
            if (top == '(' and ch != ')') or \
               (top == '{' and ch != '}') or \
               (top == '[' and ch != ']'):
                return False
    return not stack
    
def solution(s):
    n = len(s)
    answer = 0
    double_s = s + s
    
    for i in range(n):
        rotated = double_s[i:i+n]
        if is_valid(rotated):
            answer += 1
    
    
    
    return answer