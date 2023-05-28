if (!Array.prototype.customUnshift) {
    Array.prototype.customUnshift = function() {
        const temp = [];

        for (let elem of this) {
            temp.push(elem);
        }

        const length = arguments.length + this.length;
        for (let i=0; i<length; i++) {
            if (arguments[i]) {
                this[i] = arguments[i];
            } else {
                this[i] = temp[i-arguments.length];
            }
        }
        return length;
    }
}

const numbersCustom = [1, 2, 3, 4, 5];

const resultCustom = numbersCustom.customUnshift("88", "99");

console.log("resultCustom", resultCustom); // 7
console.log("numbersCustom", numbersCustom); // ["88", "99", 1, 2, 3, 4, 5];