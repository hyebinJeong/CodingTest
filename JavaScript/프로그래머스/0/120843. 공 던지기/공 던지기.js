function solution(numbers, k) {
    let index = 0;
    let skip = 2; 
    for (let i = 1; i < k; i++) { 
        index = (index + skip) % numbers.length;
    }
    return numbers[index];
}