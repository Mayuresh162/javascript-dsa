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

    // [55, 39, 41, 18, 27, 12, 33]
    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();  
        }
        return max;
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const elem = this.values[0];
        while(true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            if(leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild > elem) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if ((!swap && rightChild > elem) || (swap && rightChild > leftChild)) {
                    swap = rightChildIdx;
                }
            }
            if (!swap) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = elem;
            idx = swap;
        }
    }
}

// let heap = new PriorityQueue();
// heap.insert(41)
// heap.insert(39)
// heap.insert(33)
// heap.insert(18)
// heap.insert(27)
// heap.insert(12)
// heap.insert(55)