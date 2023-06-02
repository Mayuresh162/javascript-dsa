if (!Array.prototype.customLastIndexOf) {
    Array.prototype.customLastIndexOf = function(value, fromIdx) {
        if (fromIdx === undefined) {
            fromIdx = this.length - 1;
        }
        if (isNaN(fromIdx)) {
            return -1;
        }
        if (fromIdx < 0) {
            fromIdx += this.length;
        }
        while(fromIdx >= 0) {
            if (this[fromIdx] === value) {
                return fromIdx;
            }
            fromIdx--;
        }
        return -1;
    }
}
const numbers = [1, 2, 5, 3, 4, 5, 6];

const resultCustom1 = numbers.customLastIndexOf(5);
console.log("resultCustom1", resultCustom1); // 5

const resultCustom2 = numbers.customLastIndexOf();
console.log("resultCustom2", resultCustom2); // -1

const resultCustom3 = numbers.customLastIndexOf(5, 1);
console.log("resultCustom3", resultCustom3); // -1

const resultCustom4 = numbers.customLastIndexOf(5, -2);
console.log("resultCustom4", resultCustom4); // 5

const resultCustom5 = numbers.customLastIndexOf("5");
console.log("resultCustom5", resultCustom5); // -1