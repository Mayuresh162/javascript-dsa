if (!Function.prototype.customApply) {
    Function.prototype.customApply = function(context, args = []) {
        const uniqueSymbol = Symbol();
        context[uniqueSymbol] = this;
        const result = context[uniqueSymbol](...args);
        delete context[uniqueSymbol];
      
        return result;
    }
}

const getPlayerInfo = function (role, country) {
    return `${this.firstName} ${this.lastName}, ${role} from ${country}`;
};

const player1 = {
    firstName: "Virat",
    lastName: "Kohli",
};

const player2 = {
    firstName: "Hardik",
    lastName: "Pandya",
};

console.log(getPlayerInfo.customApply(player1, ["Batsman", "India"]));
console.log(getPlayerInfo.customApply(player2, ["All-Rounder", "India"]));