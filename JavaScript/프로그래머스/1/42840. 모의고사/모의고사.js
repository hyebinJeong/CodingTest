function solution(answers) {
    var answer = [];
    let person1 = [1,2,3,4,5];
    let person2 = [2,1,2,3,2,4,2,5];
    let person3 = [3,3,1,1,2,2,4,4,5,5];
    let score1 = 0;
    let score2 = 0;
    let score3 = 0;
    
    for(let i = 0; i < answers.length; i++){
        if(person1[i % person1.length] === answers[i]){
            score1 ++;
        }
        if(person2[i % person2.length] === answers[i]){
            score2 ++;
        }
        if(person3[i % person3.length] === answers[i]){
            score3 ++;
        }
    }
    
    console.log(score1);
    console.log(score2);
    console.log(score3);

    let maxScore = Math.max(score1, score2, score3);
    
    if(maxScore === score1) answer.push(1);
    if(maxScore === score2) answer.push(2);
    if(maxScore === score3) answer.push(3);
    
    return answer;
}