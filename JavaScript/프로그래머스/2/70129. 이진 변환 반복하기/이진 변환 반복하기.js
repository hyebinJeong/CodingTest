function solution(s) {
    let binaryCount = 0; // 이진 변환 횟수
    let zeroCount = 0; // 제거된 0의 개수

    while (s !== "1") {
        const originalLength = s.length;
        s = s.replace(/0/g, ""); // 0 제거
        zeroCount += originalLength - s.length; // 제거된 0의 개수 누적
        s = s.length.toString(2); // 2진 변환
        binaryCount++; // 이진 변환 횟수 증가
    }

    return [binaryCount, zeroCount];
}