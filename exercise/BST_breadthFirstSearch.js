class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        var cur = this.root;
        while(true) {
            if (value === cur.value) return undefined;
            if (value < cur.value) {
                if (!cur.left) {
                    cur.left = newNode;
                    return this;
                } 
                cur = cur.left;
            } else if (value > cur.value) {
                if (!cur.right) {
                    cur.right = newNode;
                    return this;
                }
                cur = cur.right;
            }
        }
    }

    // find(value) {
    //     if (!this.root) return false;
    //     var cur = this.root,
    //         found = false;
    //     while (cur && !found) {
    //         if (value < cur.value) {
    //             cur = cur.left;
    //         } else if (value > cur.value) {
    //             cur = cur.right;
    //         } else {
    //             found = true;
    //         }
    //     }
    //     if (!found) return undefined;
    //     return cur;
    // }

    contains(value) {
        if (!this.root) return false;
        var cur = this.root,
            found = false;
        while (cur && !found) {
            if (value < cur.value) {
                cur = cur.left;
            } else if (value > cur.value) {
                cur = cur.right;
            } else {
                return true;
            }
        }
        return false;
    }

    BFS() {
        var data = [], queue = [], node = this.root;
        queue.push(node);
        while(queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right)
        }
        return data;
    }
}

//          10
//      6       15
//  3       8       20
// [10, 6, 15, 3, 8, 20]  <- Expected answer

// var tree = new BinarySearchTree();
// tree.insert(10);
// tree.insert(6);
// tree.insert(15);
// tree.insert(3);
// tree.insert(8);
// tree.insert(20);