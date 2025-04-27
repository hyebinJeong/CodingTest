function solution(n, computers) {
    var count = 0;
    let visited = [];
    
    for (i = 0; i < n; i++){
        if(visited[i]) continue;
        dfs(n, computers, visited, i);
        count ++;
    }
    return count;
}
    function dfs(n, computers, visited, cur) {
        visited[cur] = true;
        
        for(let i = 0; i < n; i++){
            if(!visited[i] && computers[cur][i] == 1){
                dfs(n, computers, visited, i);
            }
        }
    }