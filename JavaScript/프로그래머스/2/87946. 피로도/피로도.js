function solution(k, dungeons) {
    let max = 0;
    
    function dfs(currentK, count, visited) {
        max = Math.max(max, count);
        
        for (let i = 0; i < dungeons.length; i++) {
            const [need, cost] = dungeons[i];
            
            if(!visited[i] && currentK >= need) {
                visited[i] = true;
                dfs(currentK - cost, count + 1, visited);
                visited[i] = false; // 방문 안한 상태로 돌려서 다른 조합 탐색
            }
        }
    }
    dfs(k, 0, Array(dungeons.length).fill(false))
    return max;
}