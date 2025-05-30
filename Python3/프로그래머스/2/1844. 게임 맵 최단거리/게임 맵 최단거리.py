from collections import deque

def solution(maps):
    n = len(maps)
    m = len(maps[0])
    
    queue = deque()
    visited = [[False] * m for _ in range(n)]
    queue.append((0,0,1))
    visited[0][0] = True
    
    dr = [0,1,0,-1]
    dc = [-1,0,1,0]
    
    while queue:
        r, c, dist = queue.popleft()
        if r == n-1 and c == m-1:
            return dist
        for d in range(4):
            nr, nc = r + dr[d], c + dc[d]
            if 0 <= nr < n and 0 <= nc < m and maps[nr][nc] == 1 and not visited[nr][nc]:
                visited[nr][nc] = True
                queue.append((nr, nc, dist + 1))
                
    return -1