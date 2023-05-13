class Queue {
    constructor() {
        this.items = {};
        this.tail = 0;
        this.head = 0;
    }

    enqueue(elem) {
        this.items[this.tail] = elem;
        this.tail++; 
    }

    dequeue() {
        const item = this.items[this.head];
        delete this.items[this.head];
        this.head++;
        return item;
    }

    isEmpty() {
        return this.tail - this.head === 0;
    }

    peek() {
        return this.items[this.head];
    }

    size() {
        return this.tail - this.head;
    }

    print() {
        console.log(this.items);
    }
}

const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.size());
queue.print();

console.log(queue.dequeue());
console.log(queue.peek());