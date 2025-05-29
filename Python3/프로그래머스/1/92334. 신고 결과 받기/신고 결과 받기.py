def solution(id_list, report, k):
    report_set = set(report)
    answer = [0] * len(id_list)
    reports = {x : 0 for x in id_list} #신고 받은 횟수 누적 목적
    
    for r in report_set:
        reports[r.split()[1]] += 1
    
    for r in report_set:
        if reports[r.split()[1]] >= k:
            answer[id_list.index(r.split()[0])] += 1
        
    return answer