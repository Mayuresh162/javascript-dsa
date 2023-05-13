class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.tail = -1;
        this.head = -1;
    }

    isFull() {
        return this.currentLength === this.capacity;
    }

    isEmpty() {
        return this.currentLength === 0;
    }

    enqueue(elem) {
        if (!this.isFull()) {
            this.tail = (this.tail + 1) % this.capacity;
            this.items[this.tail] = elem;
            this.currentLength +=1;
            if (this.head === -1) {
                this.head = this.tail;
            }
        }
    }

    dequeue() {
        if (this.isEmpty()) return null;
        const item = this.items[this.head];
        this.items[this.head] = null;
        this.head = (this.head + 1) % this.capacity;
        this.currentLength -= 1;
        if (this.isEmpty()) {
            this.head = -1;
            this.tail = -1;
        }
        return item;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.head];
        }
        return null;
    }

    print() {
        if (this.isEmpty()) {
            console.log('Queue is empty')
        } else {
            let i;
            let str = '';
            for (i= this.head; i !== this.tail; i = (i+1) % this.capacity) {
                str += this.items[i] + ' '; 
            }
            str += this.items[i];
            console.log(str);
        }
    }
}

const queue = new CircularQueue(5);
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

console.log(queue.isFull());
queue.print();

console.log(queue.dequeue());
console.log(queue.peek());
queue.print();

queue.enqueue(60);
queue.print();