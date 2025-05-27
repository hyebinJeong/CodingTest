function solution(s) {
    var answer = 0;
    let splitS = s.split(' ');
    
    for(let i = 0; i < splitS.length; i++){
        if(splitS[i] === 'Z'){
            if(i > 0){
                answer -= Number(splitS[i-1]);
            }
        }
            else{
                answer += Number(splitS[i]);
            }
        }
    return answer;
}