import java.util.*;

class Solution {
    public int solution(int n, int[][] wires) {
        int answer = Integer.MAX_VALUE;
        
       // 인접 리스트로 초기화
        List<Integer>[] graph = new ArrayList[n + 1];
        for (int i = 1; i <= n; i++) {
            graph[i] = new ArrayList<>();
        }
        
        // 간선 정보 저장
        for (int[] wire : wires) {
            graph[wire[0]].add(wire[1]);
            graph[wire[1]].add(wire[0]);
        }
        
        // 간선 하나씩 끊어보기
        for (int[] wire : wires) {
            boolean[] visited = new boolean[n+1];
            
            // 끊은 간선은 무시하고 DFS 수행
            int countA = dfs(wire[0], wire[0], wire[1], graph, visited);
            int countB = n - countA;
            
            answer = Math.min(answer, Math.abs(countA - countB));
        }
        
        return answer;
    }
    
    private int dfs(int node, int ignoreFrom, int ignoreTo, List<Integer>[] graph, boolean[] visited) {
        visited[node] = true;
        int count = 1;
        
        for (int next : graph[node]) {
            // 끊은 간선 무시
            if ((node == ignoreFrom && next == ignoreTo) || (node == ignoreTo && next == ignoreFrom)) continue;
            if (!visited[next]) {
                count += dfs(next, ignoreFrom, ignoreTo, graph, visited);
            }
        }
        return count;
    }
}