function solution(price, money, count) {
    var totalCount = 0;
    for(let i = 1; i <= count; i++){
        totalCount += (price * i)
    }
    return totalCount >= money ? Math.abs(money - totalCount) : 0;

}