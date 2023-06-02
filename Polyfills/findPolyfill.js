if (!Array.prototype.customFind) {
    Array.prototype.customFind = function(cb) {
        for (let i=0; i<this.length; i++) {
            if(cb(this[i], i, this)) {
                return this[i];
            }
        }

        return undefined;
    }
}
const numbers = [2, 4, 5, 6, 7, 9];
const findFirstOddCustom = numbers.customFind(num => num % 2);
console.log(findFirstOddCustom); // 5
