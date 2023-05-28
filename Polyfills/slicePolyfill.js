if (!Array.prototype.customSlice) {
    Array.prototype.customSlice = function (start, end) {
        let temp = [];

        if (!start && !end) {
            return [...this];
        }
        if (!end) {
            end = this.length;
        }
        if (start < 0) {
            start = this.length + start;
        }
        if (end < 0) {
            end = this.length + end;
        }

        for (let i = parseInt(+start); i < parseInt(+end); i++) {
            temp.push(this[i]);
        }
        return temp;
    };
}

const numbers = [10, 11, 12, 13, 14, 15, 16];

const result1 = numbers.customSlice(2, 5);
console.log(result1); // [ 12, 13, 14 ]

const result2 = numbers.customSlice(-4, -1);
console.log(result2); // [ 13, 14, 15 ]

const result3 = numbers.customSlice();
console.log(result3); // [ 10, 11, 12, 13, 14, 15, 16 ]

const result4 = numbers.customSlice(false, true); // 0 to 1
console.log(result4); // [ 10 ] implicit type coercion