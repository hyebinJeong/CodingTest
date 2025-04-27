class Solution {
    public int solution(int n, int[][] computers) {
        int count = 0;
        boolean[] visited = new boolean[n];
        
        // 모든 컴퓨터 기점으로 DFS를 수행하고, 이미 방문한 컴퓨터는 건너뛰기
        for (int i = 0; i < n; i++){
            if (visited[i]) continue;
            dfs(n, computers, visited, i);
            count ++;
        }
        
        // 네트워크 개수 반환
        return count;
    }
    void dfs(int n, int[][] computers, boolean[] visited, int cur){
        visited[cur] = true;
        
        for (int i = 0; i < n; i++){
            // 방문하지 않았고, cur과 i가 연결되어 있다면 dfs 실행
            if (!visited[i] && computers[cur][i] == 1) {
                dfs(n, computers, visited, i);
            }
        }
    }
}