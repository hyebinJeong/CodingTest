function solution(s) {
    let answer = 0;
    for(let x = 0; x < s.length; x++){
        let newS = s.slice(x) + s.slice(0,x);
        if(isValid(newS)){
            answer ++;
        }
    }
    return answer;
}

function isValid(str) {
    let stack = [];
    let match = {")" : "(", "]" : "[", "}" : "{"};
    for(const char of str){
        if(char === "(" || char === "[" || char === "{"){
            stack.push(char);
        }
        if(char === ")" || char === "]" || char === "}"){
            if(stack.length === 0 || stack.pop() !== match[char]){
                return false;
            }
        }
    }
    return stack.length === 0;
    
}