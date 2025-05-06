function solution(array, commands) {
    var answer = [];
    for(let n = 0; n < commands.length; n++){
        let sliceAnswer = (array.slice(commands[n][0]-1,commands[n][1]));
        let sortedAnswer = sliceAnswer.sort((a,b)=>a-b)[commands[n][2]-1];
        // console.log(sliceAnswer.sort()[commands[n][2]-1]);
        answer.push(sortedAnswer);
    }
    
    return answer;
}