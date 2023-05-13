class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority)
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        const elem  = this.values[idx];
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if (elem.priority >= parent.priority) break;
            this.values[parentIdx] = elem;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    // [55, 39, 41, 18, 27, 12, 33]
    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();  
        }
        return min;
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
                if (leftChild.priority < elem.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if ((!swap && rightChild.priority < elem.priority) ||
                    (swap && rightChild.priority < leftChild.priority)) {
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

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}


let ER = new PriorityQueue();
// max case
// ER.enqueue('common cold', 1);
// ER.enqueue('gunshot wound', 5);
// ER.enqueue('high fever', 2);

ER.enqueue('common cold', 5);
ER.enqueue('gunshot wound', 1);
ER.enqueue('high fever', 4);
ER.enqueue('broken arm', 2);
ER.enqueue('fire wound', 3);