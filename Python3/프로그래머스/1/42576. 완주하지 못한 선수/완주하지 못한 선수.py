def solution(participant, completion):
    
    participants_dict = {}
    
    # 이름별 개수 세기(동명이인 처리)
    for person in participant:
        participants_dict[person] = participants_dict.get(person, 0) + 1
    
    # 완주자들은 참가자 count에서 1명씩 빼서 제거
    for complete_person in completion:
        participants_dict[complete_person] -=1
    
    # 완주자들은 count가 0이기 때문에 0이상인 사람만 return
    for person, count in participants_dict.items():
        if count > 0:
            return person