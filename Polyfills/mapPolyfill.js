if (!Array.prototype.customMap) {
    Array.prototype.customMap = function(cb) {
        const temp = [];
        for (let elem of this) {
            temp.push(cb(elem));
        }
        return temp;
    }
}

const numbers = [1, 2, 3, 4, 5];
const squaredNums = numbers.customMap(elem => elem*elem);
console.log(squaredNums);