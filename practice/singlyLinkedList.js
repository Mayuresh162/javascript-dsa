// piece of data - val
// reference to next node - next

class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // push
    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    //traverse
    // traverse() {
    //     var cur = this.head;
    //     while(cur) {
    //         console.log(cur.val);
    //         cur = cur.next;
    //     }
    // }

    //pop
    pop() {
        if (!this.head || !this.tail) {
            return undefined;
        }
        var current = this.head;
        var newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (!this.length) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    //shift
    shift() {
        if (!this.head || !this.tail) {
            return undefined;
        }
        var curHead = this.head;
        this.head = curHead.next;
        if (!this.length) {
            this.tail = null;
        }
        this.length--;
        return curHead;
    }

    unshift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // getter
    get(index) {
        if (index < 0 || index >= this.length) return null;
        var counter = 0;
        var cur = this.head;
        while(counter !== index) {
            cur = cur.next;
            counter++;
        }
        return cur;
    }

    //setter
    set(index, val) {
        var foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    //insert
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);

        var newNode = new Node(val);
        var pre = this.get(index - 1);
        var temp = pre.next;
        pre.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    //remove
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return !!this.shift();
        if (index === this.length - 1) return !!this.pop();

        var preNode = this.get(index - 1);
        var removed = preNode.next;
        preNode.next = removed.next;
        this.length--;
        return removed;
    }

    print() {
        var arr = [];
        var cur = this.head;
        while(cur) {
            arr.push(cur.val);
            cur = cur.next;
        }
        console.log(arr);
    }

    //reverse
    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var pre = null;
        var next;
        for (var i=0; i<this.length; i++) {
            next = node.next;
            node.next = pre;
            pre = node;
            node = next;
        }
        return this;
        // [100,201,250,350,999]

        // 999 -> 350 -> 250 -> 201 -> 100 -> null
    }

    rotate(count) {
        var counter = 1;
        var cur = this.head;
        var findNode;
        if (count > 0) {
            while(counter < count && cur !== null) {
                cur = cur.next;
                counter++;
                if (counter === count) {
                    findNode = cur;
                    console.log(cur);
                }
            }
            this.tail.next = this.head;
            this.head = findNode.next;
            findNode.next = null;
        } else {
            var pre;
            while(cur !== null) {
                cur = cur.next;
                counter++;
                if (counter === this.length + count) {
                    pre = cur;
                }
            }
            console.log('val', pre, cur)
            while (count < 0) {
                if (pre.next !== null) {
                    var temp = pre.next;
                    temp.next = this.head;
                    this.head = temp;
                    this.tail = pre;
                    if (this.tail.next === pre.next) {
                        pre.next = null;
                    }
                }
                count++;
            }
        }
    }
}

// var first = new Node('Hi');
// first.next = new Node('there')
// first.next.next = new Node('how')
// first.next.next.next = new Node('are')
// first.next.next.next.next = new Node('you')

var list = new SinglyLinkedList();
list.push(5).push(10).push(15).push(20).push(25);
// list.push('HELLO');
// list.push('GOODBYE');
// list.push('!');

list.rotate(-2);
console.log(list);

// HELLO -> GOODBYE -> !
//  c
//  nt


// var singlyLinkedList = new SinglyLinkedList;
// singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
// singlyLinkedList.head.val; // 5
// singlyLinkedList.tail.val; // 25;
 
// singlyLinkedList.rotate(3);
// singlyLinkedList.head.val; // 20
// singlyLinkedList.head.next.val; // 25
// singlyLinkedList.head.next.next.val; // 5
// singlyLinkedList.head.next.next.next.val; // 10
// singlyLinkedList.head.next.next.next.next.val; // 15
// singlyLinkedList.tail.val; // 15
// singlyLinkedList.tail.next; // null
// var singlyLinkedList = new SinglyLinkedList;
// singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
// singlyLinkedList.head.val; // 5
// singlyLinkedList.tail.val; // 25;
 
// singlyLinkedList.rotate(-1);
// singlyLinkedList.head.val; // 25
// singlyLinkedList.head.next.val; // 5
// singlyLinkedList.head.next.next.val; // 10
// singlyLinkedList.head.next.next.next.val; // 15
// singlyLinkedList.head.next.next.next.next.val; // 20
// singlyLinkedList.tail.val; // 20
// singlyLinkedList.tail.next // null
// var singlyLinkedList = new SinglyLinkedList;
// singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
// singlyLinkedList.head.val; // 5
// singlyLinkedList.tail.val; // 25;
 
// singlyLinkedList.rotate(1000);
// singlyLinkedList.head.val; // 5
// singlyLinkedList.head.next.val; // 10
// singlyLinkedList.head.next.next.val; // 15
// singlyLinkedList.head.next.next.next.val; // 20
// singlyLinkedList.head.next.next.next.next.val; // 25
// singlyLinkedList.tail.val; // 25
// singlyLinkedList.tail.next // null
