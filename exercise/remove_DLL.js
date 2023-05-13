class Node{
    constructor(val){
        this.val = val
        this.next = null;      
        this.prev = null;      
    }
}

class DoublyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val){
        var newNode = new Node(val);
        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;    
        }
        this.length++;
        return this;
    }

    shift(){
        if (this.length === 0) return undefined;
        var oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    pop() {
        if (!this.head) return undefined;
        var oldTail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = oldTail.prev;
            this.tail.next = null;
            oldTail.prev = null;
        }
        this.length--;
        return oldTail;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        if (index <= this.length/2) {
            var count = 0;
            var cur = this.head;
            while(count !== index) {
                cur = cur.next;
                count++;
            }
        } else {
            var count = this.length - 1;
            var cur = this.tail;
            while(count !== index) {
                cur = cur.prev;
                count--;
            }
        }
        return cur;
    }
    
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return !!this.shift();
        if (index === this.length - 1) return !!this.pop();

        var removedNode = this.get(index);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }
}

// var doublyLinkedList = new DoublyLinkedList;
// doublyLinkedList.push(5).push(10).push(15).push(20);
// doublyLinkedList.remove(2).val; // 15
// doublyLinkedList.remove(100); // undefined
// doublyLinkedList.length // 3
// doublyLinkedList.head.val // 5
// doublyLinkedList.head.next.val // 10
// doublyLinkedList.head.next.next.val // 20