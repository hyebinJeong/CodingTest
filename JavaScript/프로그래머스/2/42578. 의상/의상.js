function solution(clothes) {
    var answer = 1;
    const myMap = new Map();
    for(const cloth of clothes){
        myMap.set(cloth[1], (myMap.get(cloth[1]) || 0) + 1) // key-value
    }
    for(const val of myMap.values()){
        answer *= val + 1;
    }
    return answer - 1;
}