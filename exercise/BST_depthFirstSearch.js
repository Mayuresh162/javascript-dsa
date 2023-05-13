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

    DFSPreOrder() {
        var data = [];
        // var cur = this.root;

        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }

        traverse(this.root);
        return data;
    } // [10, 6, 3, 8, 15, 20]  <- Expected answer

    DFSPostOrder() {
        var data = [];
        // var cur = this.root;

        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }

        traverse(this.root);
        return data;
    } // [3, 8, 6, 20, 15, 10] <- Expected answer

    DFSInOrder() {
        var data = [];
        // var cur = this.root;

        function traverse(node) {
            node.left && traverse(node.left);
            data.push(node.value);
            node.right && traverse(node.right);
        }

        traverse(this.root);
        return data;
    } // [3, 6, 8, 10, 15, 20] <- Expected answer
}

//          10
//      6       15
//  3       8       20

// var tree = new BinarySearchTree();
// tree.insert(10);
// tree.insert(6);
// tree.insert(15);
// tree.insert(3);
// tree.insert(8);
// tree.insert(20);