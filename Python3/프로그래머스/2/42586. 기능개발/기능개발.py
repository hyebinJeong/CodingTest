def solution(progresses, speeds):
    days = []
    answer = []
    # progresses, speed 돌면서 각 인덱스별로 progresses 가 100보다 크거나
    # 같을때까지 speed 더해서 count 한 값을 days에 추가
    # days를 돌면서 각 item 보다 작거나같으면 answer+= 1
    # 그다음 인덱스로이동 (for문사용) 
    for i in range(len(progresses)):
        count = 0
        while progresses[i] < 100:
            progresses[i] = progresses[i] + speeds[i]
            count += 1
        days.append(count)

    current = days[0]
    # 기능 배포 하나 확정
    count_deploy = 1
    
    for i in range(1, len(days)):
        if days[i] <= current:
            count_deploy += 1
        else:
            # 이전 배포 묶음 answer에 먼저 추가
            answer.append(count_deploy)
            current = days[i]
            # 새 배포에는 이 기능이 이미 하나 들어있으니까 1로 초기화
            count_deploy = 1
    answer.append(count_deploy)
    return answer