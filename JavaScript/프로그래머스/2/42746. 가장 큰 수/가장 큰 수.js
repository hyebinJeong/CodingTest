function solution(numbers) {
    var answer = numbers.sort((a,b) => (b + '' + a).localeCompare(a + '' + b)).join('');
    // 첫 글자가 0이면 0반환, 아니면 answer반환
    return answer[0] === '0' ? '0' : answer;
}