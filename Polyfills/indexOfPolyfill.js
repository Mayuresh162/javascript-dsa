if (!Array.prototype.customIndexOf) {
    Array.prototype.customIndexOf = function(value, fromIdx) {
        if (fromIdx === undefined || isNaN(fromIdx)) {
            fromIdx = 0;
        }
        if (fromIdx < 0) {
            fromIdx += this.length;
        }
        while(fromIdx < this.length) {
            if (this[fromIdx] === value) {
                return fromIdx;
            }
            fromIdx++;
        }
        return -1;
    }
}
const numbers = [1, 2, 5, 3, 4, 5, 6];

const resultCustom1 = numbers.customIndexOf(5);
console.log("resultCustom1", resultCustom1); // 2

const resultCustom2 = numbers.customIndexOf();
console.log("resultCustom2", resultCustom2); // -1

const resultCustom3 = numbers.customIndexOf(5, 3);
console.log("resultCustom3", resultCustom3); // 5

const resultCustom4 = numbers.customIndexOf(5, -2);
console.log("resultCustom4", resultCustom4); // 5

const resultCustom5 = numbers.customIndexOf("5");
console.log("resultCustom5", resultCustom5); // -1