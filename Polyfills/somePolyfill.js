if (!Array.prototype.customSome) {
    Array.prototype.customSome = function(cb) {
        for (let i=0; i<this.length; i++) {
            if (cb(this[i], i, this)) return true;
        }
        return false;
    }
}

const numbers = [1, 2, 3, 4, 5, 6];

const resultCustom = numbers.customSome(elem => elem > 5);
console.log("resultCustom", resultCustom);