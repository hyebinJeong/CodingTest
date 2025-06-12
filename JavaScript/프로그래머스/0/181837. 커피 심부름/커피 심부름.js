function solution(order) {
    let answer = 0;
    for (const item of order) {
        answer += item.includes('latte') ? 5000 : 4500;
    }
    return answer;
}