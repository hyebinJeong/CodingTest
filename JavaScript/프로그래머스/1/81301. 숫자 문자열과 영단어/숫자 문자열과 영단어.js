function solution(s) {
    var answer = 0;
    var str = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let result = s;
    for(let i = 0; i < str.length; i++){
        result = result.replaceAll(str[i],i);
    }   
    return parseInt(result);
}