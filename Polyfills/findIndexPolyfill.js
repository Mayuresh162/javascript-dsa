if (!Array.prototype.customFindIndex) {
    Array.prototype.customFindIndex = function(cb) {
        for (let i=0; i<this.length; i++) {
            if(cb(this[i], i, this)) {
                return i;
            }
        }

        return -1;
    }
}

const numbers = [1, 2, 5, 3, 4, 5, 6];
const resultCustom1 = numbers.customFindIndex(elem => elem === 4);
console.log("resultCustom1", resultCustom1); // 4