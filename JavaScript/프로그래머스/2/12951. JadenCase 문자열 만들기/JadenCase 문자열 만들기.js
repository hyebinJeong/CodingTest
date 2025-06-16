function solution(s) {
    var answer = '';
    return s.split(" ").map((word)=>{
        if(word === "") return ""; // 빈문자열 처리(undefined 오류 방지)
        const firstWord = word[0]; // 빈문자열 제외하고 첫번째로 나오는 word
        const rest = word.slice(1).toLowerCase();
        if(/[a-zA-Z]/g.test(firstWord)){
            return firstWord.toUpperCase() + rest;
        }
        else{
            return firstWord + rest;
        }
    }).join(" ")
}