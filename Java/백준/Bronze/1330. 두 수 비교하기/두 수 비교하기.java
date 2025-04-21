import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        String input = br.readLine();
        String[] parts = input.split(" ");
        
        int A = Integer.parseInt(parts[0]);
        int B = Integer.parseInt(parts[1]);
        
        if(A > B) {
            System.out.println(">");
        }else if (A < B) {
            System.out.println("<");
        }else {
            System.out.println("==");
        }
        
        
    }
}