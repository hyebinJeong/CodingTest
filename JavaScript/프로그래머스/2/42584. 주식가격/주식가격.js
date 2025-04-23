function solution(prices) {
    const answer = new Array(prices.length).fill(0);
    // 인덱스 값만 저장
    const stack = [];

    for (let i = 0; i < prices.length; i++) {
        while (stack.length && prices[stack[stack.length - 1]] > prices[i]) {
            const top = stack.pop();
            answer[top] = i - top;
        }
        // 현재 시점은 아직 떨어지지 않았으니 스택에 저장
        stack.push(i);
    }

    // 끝까지 안 떨어진 시점 처리
    while (stack.length) {
        const top = stack.pop();
        // 전체 배열 끝 인덱스에서 top을 뺀 값이 유지 시간
        answer[top] = prices.length - 1 - top;
    }

    return answer;
}
