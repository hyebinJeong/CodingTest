import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        // 한 줄 입력받기
        String input = br.readLine();
        
        String[] parts = input.split(" ");
        
        int A = Integer.parseInt(parts[0]);
        int B = Integer.parseInt(parts[1]);
        
        System.out.println(A+B);
    }
}
