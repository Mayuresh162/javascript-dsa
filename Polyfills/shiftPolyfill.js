if (!Array.prototype.customShift) {
    Array.prototype.customShift = function() {
        const result = this[0];

        for (let i=0; i<this.length; i++) {
            this[i] = this[i+1];
        }
        this.length -= 1;
        return result;
    }
}

const numbersCustom = [1, 2, 3, 4, 5];

const resultCustom = numbersCustom.customShift();

console.log("resultCustom", resultCustom); // 1
console.log("numbersCustom", numbersCustom); // [ 2, 3, 4, 5 ]