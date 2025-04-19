function solution(d, budget) {
    
    let sum = 0;
    let answer = 0;
    
    d.sort((a, b) => a - b);
    
    for (let i = 0; i < d.length; i++){
        // 더하기 전에 예산 초과 확인 필요
        if (sum + d[i] <= budget) {
            sum += d[i];
            answer++;
        } else {
            break; 
        }
    }
    
    return answer;
}