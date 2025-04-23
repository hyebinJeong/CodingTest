import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // 입력 받기 위한 Scanner 생성
        Scanner sc = new Scanner(System.in);

        // 정수 N 입력 받기
        int n = sc.nextInt();
        int sum = 0;

        for (int i = 1; i <= n; i++) {
            sum += i;
        }

        System.out.println(sum);
        sc.close();
    }
}
