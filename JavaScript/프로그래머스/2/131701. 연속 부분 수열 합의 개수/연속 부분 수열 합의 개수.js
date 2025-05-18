function solution(elements) {
    const n = elements.length;
    const set = new Set();

    const circular = elements.concat(elements);

    for (let len = 1; len <= n; len++) {
        for (let start = 0; start < n; start++) {
            const subArray = circular.slice(start, start + len);
            const sum = subArray.reduce((a, b) => a + b, 0);
            set.add(sum);
        }
    }

    return set.size;
}
