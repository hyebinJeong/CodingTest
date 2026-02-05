def solution(array):
    count = {}
    answer = 0
    
    # array를 for문으로 돌면서 각 원소들을 key로 하고 등장할때마다 value를 +1해주고 가장 큰 value의 값을 return
    # -> hashmap 사용
    # 만약 max value값이 2개 이상이면 -1 return
    
    for num in array:
        count[num] = count.get(num,0) + 1
    
    max_count = max(count.values())
    
    for val in count.values():
        if val == max_count:
            answer += 1
    
    if answer > 1: return -1
    
    for key, val in count.items():
        if val == max_count:
            return key