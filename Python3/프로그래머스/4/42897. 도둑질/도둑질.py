def solution(money):
    if len(money) == 1:
        return money[0]
    
    case1 = money[:-1]
    case2 = money[1:]
    
    return max(rob(case1), rob(case2))

def rob(arr):
    prev, curr = 0,0
    for num in arr:
        prev, curr = curr, max(curr, prev + num)
    return curr