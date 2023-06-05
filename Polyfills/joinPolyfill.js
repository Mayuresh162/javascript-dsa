if (!Array.prototype.customJoin) {
    Array.prototype.customJoin = function(separator) {
        let res = '';
        if (!this.length) return res;
        if (separator == undefined) {
            separator = ',';
        }
        res = this[0];
        for (let i=1; i<this.length; i++) {
            res = res + separator + this[i];
        }
        return res;
    }
}

const names = ["mayuresh", "learning", "javascript"];

const resultCustom = names?.customJoin();
console.log("resultCustom", resultCustom);

const resultCustom1 = names?.customJoin("");
console.log("resultCustom1", resultCustom1);

const resultCustom2 = names?.customJoin(" ");
console.log("resultCustom2", resultCustom2);

const resultCustom3 = names?.customJoin("-");
console.log("resultCustom3", resultCustom3);