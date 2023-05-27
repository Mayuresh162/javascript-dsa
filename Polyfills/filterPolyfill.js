if (!Array.prototype.customFilter) {
    Array.prototype.customFilter = function(cb) {
        const temp = [];
        for (let elem of this) {
            if (cb(elem)) {
                temp.push(elem);
            }
        }
        return temp;
    }
}

const numbers = [1, 2, 3, 4, 5, 6];
const oddNums = numbers.customFilter(elem => elem % 2 != 0);
console.log(oddNums);