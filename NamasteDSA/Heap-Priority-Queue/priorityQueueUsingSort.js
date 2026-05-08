// not the efficient way of creating PQ
class PriorityQueue {
   constructor() {
        this.queue = [];
    }

    enqueue(val, priority) {
        this.queue.push({val, priority});
        this.sort();
    }

    dequeue() {
        return this.queue.shift();
    }

    sort() {
        this.queue.sort((a, b) => b.priority - a.priority); // Highest priority at the top
    }

    peek() {
      return this.queue[0];
    }

    isEmpty() {
      return this.queue.length === 0;
    }
}
