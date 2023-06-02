if (!Array.prototype.customIncludes) {
    Array.prototype.customIncludes = function(value, fromIdx) {
        if (fromIdx === undefined || isNaN(fromIdx)) {
            fromIdx = 0;
        }
        if (fromIdx < 0) {
            fromIdx += this.length;
        }
        while(fromIdx < this.length) {
            if (this[fromIdx] === value) {
                return true;
            }
            fromIdx++;
        }
        return false;
    }
}
const numbers = [1, 2, 5, 3, 4, 5, 6];

const resultCustom1 = numbers.customIncludes(5);
console.log("resultCustom1", resultCustom1); // true

const resultCustom2 = numbers.customIncludes();
console.log("resultCustom2", resultCustom2); // false

const resultCustom3 = numbers.customIncludes(5, 6);
console.log("resultCustom3", resultCustom3); // false

const resultCustom4 = numbers.customIncludes(5, -2);
console.log("resultCustom4", resultCustom4); // true

const resultCustom5 = numbers.customIncludes("5");
console.log("resultCustom5", resultCustom5); // false