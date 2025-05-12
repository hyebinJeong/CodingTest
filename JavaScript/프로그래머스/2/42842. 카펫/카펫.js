function solution(brown, yellow) {
    for (let height = 1; height <= Math.sqrt(yellow); height++) {
        if (yellow % height === 0) {
            let width = yellow / height; // 가로 * 세로 조합 중 하나
            
            let totalWidth = width + 2; 
            let totalHeight = height + 2; 
            
            if (totalWidth * totalHeight === brown + yellow) {
                return [totalWidth, totalHeight];
            }
        }
    }
}