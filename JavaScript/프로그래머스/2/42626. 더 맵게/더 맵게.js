class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    pop() {
        if (this.heap.length === 0) return null;
        const min = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.bubbleDown();
        }
        return min;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        const current = this.heap[index];
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];
            if (current >= parent) break;
            this.heap[parentIndex] = current;
            this.heap[index] = parent;
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        const current = this.heap[0];

        while (true) {
            let leftIdx = 2 * index + 1;
            let rightIdx = 2 * index + 2;
            let swap = null;

            if (leftIdx < length && this.heap[leftIdx] < current) {
                swap = leftIdx;
            }

            if (
                rightIdx < length &&
                this.heap[rightIdx] < (swap === null ? current : this.heap[leftIdx])
            ) {
                swap = rightIdx;
            }

            if (swap === null) break;

            this.heap[index] = this.heap[swap];
            this.heap[swap] = current;
            index = swap;
        }
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }
}

function solution(scoville, K) {
    const heap = new MinHeap();
    for (let s of scoville) heap.push(s);

    let count = 0;
    while (heap.size() >= 2 && heap.peek() < K) {
        const least = heap.pop();
        const secondLeast = heap.pop();
        const newScoville = least + secondLeast * 2;
        heap.push(newScoville);
        count++;
    }

    return heap.peek() >= K ? count : -1;
}
