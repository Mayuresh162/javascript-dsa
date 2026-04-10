
var MyStack = function() {
    this.q1 = [];
    return null;
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.push(x);
    return null;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let c = this.q1.length;
    while(c>0) {
        console.log(c);
        let shifted = this.q1.shift();
        if (c===1) {
            return shifted;
        } else {
            this.q1.push(shifted);
        }
        c--;
    }
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let c = this.q1.length;
    while(c > 0) {
        const shifted = this.q1.shift();
        this.q1.push(shifted);
        if (c === 1) {
            return shifted;
        }
        c--;
    }
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
