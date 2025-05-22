function solution(order) {
    var answer = String(order)
                        .split('')
                        .filter(num => ['3','6','9'].includes(num))
                        .length;
    return answer;
}