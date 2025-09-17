def solution(score):
    average = [sum(s) / 2 for s in score]
    
    sorted_avg = sorted(average, reverse=True)
    
    ranks = [sorted_avg.index(avg) + 1 for avg in average]
    return ranks