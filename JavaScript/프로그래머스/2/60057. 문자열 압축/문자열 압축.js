function solution(s) {
    // 압축 결과 중 최소 길이
    let minLength = s.length;
    
    // 절반 이상 단위는 압축 불가
    for(let n = 1; n <= Math.floor(s.length / 2); n++) {
        
        let stack = [];
        // 최종적으로 압축된 문자열 저장
        let compressed = "";
        // 동일한 단위 문자열 반복 횟수 저장
        let count = 1;
        
        for (let i = 0; i < s.length; i += n){
            const current = s.slice(i, i + n);
            
            if (stack.length === 0) {
                stack.push(current);
                continue;
            }
            
            const top = stack[stack.length -1];
            
            if (top === current) {
                count ++;
            } else {
                if (count > 1) {
                    compressed += count + top;
                } else {
                    compressed += top;
                }
                stack = [current];
                count = 1;
            }
        }
        
        if(stack.length > 0) {
            const top = stack[stack.length -1];
            compressed += (count > 1 ? count : "") + top;
        }
        
        minLength = Math.min(minLength, compressed.length);
        
    }
    
    
    return minLength;
}