function solution(begin, target, words) {
    const queue = [{ word: begin, count: 0 }];
    const visited = new Array(words.length).fill(false);
    
    while (queue.length > 0) {
        const { word, count } = queue.shift();
        
        if (word === target) return count;
        
        for (let i = 0; i < words.length; i++) {
            if (!visited[i] && getDiffCount(word, words[i]) === 1) {
                visited[i] = true;
                queue.push({ word: words[i], count: count + 1 });
            }
        }
    }
    
    return 0;
}

function getDiffCount(word1, word2) {
    let diff = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) diff++;
    }
    return diff;
}
