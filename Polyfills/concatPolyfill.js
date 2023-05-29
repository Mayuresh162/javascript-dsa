if (!Array.prototype.customConcat) {
    Array.prototype.customConcat = function() {
        const temp = [];
        for (let elem of this) {
            temp.push(elem);
        }

        for (let argElem of arguments) {
            if (Array.isArray(argElem)) {
                for (let elem of argElem) {
                    temp.push(elem);
                }
            } else {
                temp.push(argElem);
            }
        }
        return temp;
    }
}

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const value1 = "jc";
const value2 = "2";
const value3 = function () {};
const value4 = undefined;
const value5 = null;
const numbers3 = [7, 8, 9];

const resultCustom = numbers1.customConcat(
    numbers2,
    value1,
    value2,
    value3,
    value4,
    value5,
    numbers3
);

console.log("resultCustom", resultCustom);