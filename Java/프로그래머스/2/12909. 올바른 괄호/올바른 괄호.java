import java.util.*;

class Solution {
    boolean solution(String s) {
        boolean answer = true;
        // ArrayList에 char값을 추가하려면 이렇게 해줘야함
        List<Character> stack = new ArrayList<>();
        
        for(int i = 0; i < s.length(); i++){
            char ch = s.charAt(i); // 문자열에서 한 글자씩 추출
            // JS에서 s[i]를 JAVA에서는 이렇게 해야한다고 함
            
            if(ch == '('){
                // 이건 JS push랑 같음
                stack.add(ch);
            } else if(ch == ')') {
                if (stack.isEmpty()) {
                    return false;
                } else {
                    stack.remove(stack.size() -1);
                }
                // 반복이 끝났을 때 열린 괄호가 남아있으면 false
            }
        }

        

        return stack.isEmpty();
    }
}