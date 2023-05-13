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

    set(index, val){
        var foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
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
}


// var doublyLinkedList = new DoublyLinkedList();
 
// doublyLinkedList.push(5).push(10).push(15).push(20);
// doublyLinkedList.set(0,10) // true
// doublyLinkedList.length // 4
// doublyLinkedList.head.val // 10
 
// doublyLinkedList.set(10,10) // false
 
// doublyLinkedList.set(2,100) // true
// doublyLinkedList.head.next.next.val; // 100
