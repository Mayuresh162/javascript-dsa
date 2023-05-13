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
    push(val) {
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
    unshift(val){
        var newNode = new Node(val);
        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
}


// var doublyLinkedList = new DoublyLinkedList;
// doublyLinkedList.unshift(5); // doublyLinkedList
// doublyLinkedList.length; // 1
// doublyLinkedList.head.val; // 5
// doublyLinkedList.tail.val; // 5
// doublyLinkedList.unshift(10); doublyLinkedList 
// doublyLinkedList.length; // 2
// doublyLinkedList.head.val; // 10
// doublyLinkedList.head.next.val; // 5
// doublyLinkedList.tail.val; // 5
// doublyLinkedList.unshift(15); doublyLinkedList
// doublyLinkedList.length; // 3
// doublyLinkedList.head.val; // 15
// doublyLinkedList.tail.val; // 5
// doublyLinkedList.head.next.next.val; // 5
