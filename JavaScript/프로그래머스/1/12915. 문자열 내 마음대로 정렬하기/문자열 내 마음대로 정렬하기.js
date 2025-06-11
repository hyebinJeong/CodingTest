function solution(strings, n) {
    return strings.sort((a, b) => {
        const charA = a.charCodeAt(n);
        const charB = b.charCodeAt(n);

        if (charA === charB) {
            return (a > b) - (a < b); // 사전순 정렬
        } else {
            return charA - charB; // n번째 문자 기준 정렬
        }
    });
}