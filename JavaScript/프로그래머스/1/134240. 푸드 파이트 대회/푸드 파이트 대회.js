function solution(food) {
    let result = [];
    for(let i = 1; i < food.length; i++){
        for(let j = 0; j < Math.floor(food[i]/2); j++){
            result.push(i);
        }   
    }
    return result.join('') + 0 + result.reverse().join('');
}