if (!Array.prototype.customReduce) {
    Array.prototype.customReduce = function(cb, initial) {
        let result = initial;
        for (let i=0; i<this.length; i++) {
            result = result ? cb(result, this[i]) : this[i];
        }
        return result;
    }
}

const numbers = [1, 2, 3, 4, 5, 6];
const sum = numbers.customReduce((total, num) => total + num, 0);
console.log(sum);