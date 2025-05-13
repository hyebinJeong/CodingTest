import java.util.*;

class Solution {
    public int[] solution(String[][] places) {
        int[] answer = new int[places.length];

        for (int i = 0; i < answer.length; i++) {
            if (check(places[i])) answer[i] = 1;
        }

        return answer;
    }

    // 대기실 한 개에 대해 거리두기 검사
    boolean check(String[] place) {
        for (int r = 0; r < 5; r++) {
            for (int c = 0; c < 5; c++) {
                if (place[r].charAt(c) == 'P') {
                    if (!bfs(r, c, place)) return false;
                }
            }
        }
        return true;
    }

    // BFS로 거리 2까지 검사
    boolean bfs(int r, int c, String[] place) {
        int[] dr = {0, 1, 0, -1};  // 우, 하, 좌, 상
        int[] dc = {1, 0, -1, 0};
        boolean[][] visited = new boolean[5][5];
        Queue<int[]> queue = new ArrayDeque<>();

        queue.add(new int[]{r, c, 0}); // 현재 좌표와 거리
        visited[r][c] = true;

        while (!queue.isEmpty()) {
            int[] cur = queue.poll();
            int cr = cur[0], cc = cur[1], dist = cur[2];

            if (dist >= 2) continue; // 거리 2 넘으면 무시

            for (int i = 0; i < 4; i++) {
                int nr = cr + dr[i];
                int nc = cc + dc[i];

                if (!inRange(nr, nc) || visited[nr][nc] || place[nr].charAt(nc) == 'X') continue;

                if (place[nr].charAt(nc) == 'P') return false; // 사람 발견, 칸막이 없음 → 실패

                queue.add(new int[]{nr, nc, dist + 1});
                visited[nr][nc] = true;
            }
        }

        return true;
    }

    boolean inRange(int r, int c) {
        return 0 <= r && r < 5 && 0 <= c && c < 5;
    }
}
