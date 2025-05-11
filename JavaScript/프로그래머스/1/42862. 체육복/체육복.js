function solution(n, lost, reserve) {
    // 1. 여벌 체육복 있지만 도난당한 학생 제거
    let realLost = lost.filter(l => !reserve.includes(l));
    let realReserve = reserve.filter(r => !lost.includes(r));

    // 2. 여벌 체육복 빌려주기
    realLost.sort((a, b) => a - b); // 오름차순 정렬
    let borrowed = 0;

    for (let i = 0; i < realLost.length; i++) {
        let student = realLost[i];
        if (realReserve.includes(student - 1)) {
            realReserve = realReserve.filter(r => r !== student - 1);
            borrowed++;
        } else if (realReserve.includes(student + 1)) {
            realReserve = realReserve.filter(r => r !== student + 1);
            borrowed++;
        }
    }

    return n - realLost.length + borrowed;
}
