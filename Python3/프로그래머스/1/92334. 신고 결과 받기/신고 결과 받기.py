def solution(id_list, report, k):
    report_set = set(report)
    answer = [0] * len(id_list)
    reports = {x:0 for x in id_list}
    
    for r in report_set:
        reports[r.split()[1]] += 1 # 신고당한 사람 카운팅 올리기
        
    for r in report_set:
        if reports[r.split()[1]] >= k:
            answer[id_list.index(r.split()[0])] += 1
    return answer