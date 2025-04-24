class Solution {
    public String solution(String new_id) {
        
        // 1. 소문자로 치환
        new_id = new_id.toLowerCase();
        
        // 2. 알파벳 소문자, 숫자, -, _, . 제외한 모든 문자 제거
        new_id = new_id.replaceAll("[^a-z0-9-_.]", "");
        
        // 3. 마침표 2번 이상 연속된 부분 하나만
        new_id = new_id.replaceAll("\\.{2,}", ".");
        
        // 4. .가 처음이나 끝에 위치하면 제거
        new_id = new_id.replaceAll("^\\.|\\.$", "");
        
        // 5. 빈문자열이면 new_id에 "a" 대입
        if(new_id.isEmpty()){
            new_id = "a";
        }
        
        // 6. new_id 길이 16자 이상이면 첫 15개 문자만 남기고 다 제거
        // 제거 후 .가 new_id 끝에 위치한다면 . 문자 제거
        if(new_id.length() >= 16){
             new_id = new_id.substring(0,15);
             new_id = new_id.replaceAll("\\.$","");
        }
                                           
        // 7. 2자 이하면 마지막 문자를 3길이가 될때까지 돌리기
        while(new_id.length() < 3){
            new_id += new_id.charAt(new_id.length() -1);
        }
            
        
        return new_id;
    }
}