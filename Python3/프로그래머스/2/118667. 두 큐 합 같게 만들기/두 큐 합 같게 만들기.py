from collections import deque

def solution(queue1, queue2):
    q1 = deque(queue1)
    q2 = deque(queue2)
    
    # 각 큐의 합 계산
    sum1 = sum(q1)
    sum2 = sum(q2)
    
    total = sum1 + sum2
    
    # 합이 홀수면 절대 같아질 수 없음
    if total % 2 != 0:
        return -1
    
    target = total // 2
    
    max_ops = len(q1) * 3 # 최대 연산 횟수
    cnt = 0
    
    # 포인터 방식으로 q1, q2를 합쳐서 투포인터처럼 돌리기
    while cnt <= max_ops:
        if sum1 == target:
            return cnt
        elif sum1 > target:
            val = q1.popleft()
            q2.append(val)
            sum1 -= val
        else:
            val = q2.popleft()
            q1.append(val)
            sum1 += val
        cnt += 1
    
    return -1 # 목표 합을 만들 수 없음