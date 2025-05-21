function solution(rank, attendance) {
    let candidate = [];
    for(let i = 0; i < attendance.length; i++){
        if(attendance[i]){
            candidate.push({rank: rank[i], index: i});
        }
    }
    candidate.sort((a,b) => a.rank - b.rank);
    const top3 = candidate.slice(0,3);
    const [a,b,c] = top3.map(i => i.index);
    
    
    return (10000 * a) + (100 * b) + c;
}