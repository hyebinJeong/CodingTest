import java.util.*;

class Solution {
    public int[] solution(int[] progresses, int[] speeds) {
        Queue<Integer> queue = new LinkedList<>();
        List<Integer> result = new ArrayList<>();

        // 기능별로 완료까지 걸리는 일수를 계산해서 큐에 저장
        for (int i = 0; i < progresses.length; i++) {
            int days = (int)Math.ceil((100.0 - progresses[i]) / speeds[i]);
            queue.offer(days);
        }

        // 큐를 기준으로 기능 배포 묶음을 계산
        while (!queue.isEmpty()) {
            int base = queue.poll(); // 배포 기준일
            int count = 1;

            // 다음 기능들이 base일 이하로 끝나면 같이 배포
            while (!queue.isEmpty() && queue.peek() <= base) {
                queue.poll();
                count++;
            }

            result.add(count); // 묶음 개수 저장
        }

        // List<Integer> → int[] 변환
        return result.stream().mapToInt(i -> i).toArray();
    }
}
