def solution(numbers, target):
    def dfs(i,s):
        if i == len(numbers): return s == target
        return dfs(i+1, s+numbers[i]) + dfs(i+1, s-numbers[i])
    return dfs(0,0)