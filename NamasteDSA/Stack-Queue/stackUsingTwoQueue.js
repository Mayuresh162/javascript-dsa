
var MyStack = function() {
    this.q1 = [];
    this.q2 = [];
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
    while(this.q1.length > 0) {
        const shifted = this.q1.shift();
        if (this.q1.length === 0) {
            this.q1 = this.q2;
            this.q2 = [];
            return shifted;
        } else {
            this.q2.push(shifted);
        }
    }
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    while(this.q1.length > 0) {
        const shifted = this.q1.shift();
        this.q2.push(shifted);
        if (this.q1.length === 0) {
            this.q1 = this.q2;
            this.q2 = [];
            return shifted;
        } 
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
