function solution(k, score) {
    const 명예의전당 = [];
    return score.map(s => {
        명예의전당.push(s); // 명예의 전당에 현재 점수 추가
        명예의전당.sort((a, b) => a - b); // 명예의 전당 정렬
        if (명예의전당.length > k) 명예의전당.shift(); // k개 초과 시 최하위 점수 제거
        return 명예의전당[0]; // 명예의 전당 최하위 점수 반환
    });
}