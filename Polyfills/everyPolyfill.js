if (!Array.prototype.customEvery) {
    Array.prototype.customEvery = function(cb) {
        for (let i=0; i<this.length; i++) {
            if (!cb(this[i], i, this)) return false;
        }
        return true;
    }
}

const numbers = [1, 2, 3, 4, 5, 6];

const resultCustom = numbers.customEvery(elem => elem > 0);
console.log("resultCustom", resultCustom);