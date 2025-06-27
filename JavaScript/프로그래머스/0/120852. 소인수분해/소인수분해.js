function solution(n) {
    const answer = [];
    let divisor = 2;

    while (n >= 2) { 
        if (n % divisor === 0) { 
            answer.push(divisor);
            n = n / divisor;
        } else {
            divisor++;
        }
    }
    return [...new Set(answer)].sort((a, b) => a - b);
}