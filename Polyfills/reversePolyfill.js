if (!Array.prototype.customReverse) {
    Array.prototype.customReverse = function() {
        let j = this.length -1;
        for (let i=0; i<this.length/2; i++) {
            let temp = this[i];
            this[i] = this[j];
            this[j] = temp;
            j--
        }

        return this;
    }   
}

const numbersCustom = [1, 2, 3, 4, 5];

const resultCustom = numbersCustom.customReverse();

console.log("resultCustom", resultCustom); // [ 5, 4, 3, 2, 1 ]
console.log("numbersCustom", numbersCustom); // [ 5, 4, 3, 2, 1 ]