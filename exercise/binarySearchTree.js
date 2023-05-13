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
}