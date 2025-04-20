import java.util.*;

class Solution {
    public boolean solution(String[] phone_book) {
        boolean answer = true;
        Map<String, Boolean> map = new HashMap<>();
        
        // 모든 전화번호를 map에 저장
        for (String phoneNum : phone_book) {
            map.put(phoneNum, true);
        }
        
        // 각 전화번호 접두어를 하나씩 잘라서 map에 존재하는지 확인
        for (String phoneNum : phone_book) {
            for(int i = 1; i < phoneNum.length(); i++) {
                String prefix = phoneNum.substring(0, i);
                
                if(map.containsKey(prefix)) {
                    return false; // 접두어가 존재하면 false
                }
            }
        }
        
        return true; // 접두어 없으면 true
    }
}