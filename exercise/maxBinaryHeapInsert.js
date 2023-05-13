class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        const elem  = this.values[idx];
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if (elem <= parent) break;
            this.values[parentIdx] = elem;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
}

// [41, 39, 33, 18, 27, 12, 55]
//   0  1   2   3   4   5   6

// let heap = new PriorityQueue();
// heap.insert(41)
// heap.insert(39)
// heap.insert(33)
// heap.insert(18)
// heap.insert(27)
// heap.insert(12)
// heap.insert(55)
