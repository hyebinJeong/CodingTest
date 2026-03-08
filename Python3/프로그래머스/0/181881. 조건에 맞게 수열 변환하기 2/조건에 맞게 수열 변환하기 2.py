def solution(arr):
    count = 0
    
    while True:
        changed = False
        new_arr = []
        
        for num in arr:
            if num >= 50 and num % 2 == 0:
                new = num // 2
            elif num < 50 and num % 2 == 1:
                new = num * 2 + 1
            else:
                new = num
            if new != num:
                changed = True
                
            new_arr.append(new)
        if not changed:
            return count
        
        arr = new_arr
        count += 1