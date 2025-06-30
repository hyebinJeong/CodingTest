function solution(arr, k) {
    var answer = [];
    var newArr = [...new Set(arr)];
    console.log(newArr)
    for(let i = 0; i < newArr.length; i++){
        if(answer.length < k){
            answer.push(newArr[i]);
        }
        else{
            break;
        }     
    }
    while (answer.length < k) {
        answer.push(-1);
    }
    return answer;
}