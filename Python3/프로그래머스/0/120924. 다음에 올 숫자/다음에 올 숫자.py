def solution(common):
    diff = common[1] - common[0]
    ratio = common[1] // common[0] if common[0] != 0 else None
    
    if common[2] - common[1] == diff:
        return common[-1] + diff
    else:
        return common[-1] * ratio