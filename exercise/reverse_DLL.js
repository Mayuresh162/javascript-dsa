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
    
    reverse() {
        var node = this.head;
        var temp = null;

        while (node != null) {
            temp = node.prev;
            node.prev = node.next;
            node.next = temp;
            node = node.prev; 
        }
        if (temp != null) {
            this.head = temp.prev;
        }
        return this;
    }
}


// let doublyLinkedList = new DoublyLinkedList;
// doublyLinkedList.push(5).push(10).push(15).push(20)
// doublyLinkedList.reverse(); // singlyLinkedList;
// doublyLinkedList.length; // 4
// doublyLinkedList.head.val); // 20
// doublyLinkedList.head.next.val; // 15
// doublyLinkedList.head.next.next.val; // 10
// doublyLinkedList.head.next.next.next.val; // 5