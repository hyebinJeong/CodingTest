import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        // 입력 스트림 생성
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        // 한 줄 입력받기 (예: "1 2")
        String input = br.readLine();
        
        // 공백 기준으로 나눠서 배열에 저장
        String[] parts = input.split(" ");
        int A = Integer.parseInt(parts[0]);
        int B = Integer.parseInt(parts[1]);
        
        System.out.println(A - B);
    }
}
