if (!Function.prototype.customBind) {
    Function.prototype.customBind = function(context, ...args) {
        //  using symbol
        const uniqueSymbol = Symbol();
        context[uniqueSymbol] = this;

        return function(...newArgs) {
            const result = context[uniqueSymbol](...args, ...newArgs);
            delete context[uniqueSymbol];
            return result;
        }

        // using apply
        // const fn = this;
        // return function(...newArgs) {
        //     return fn.apply(context, [...args, ...newArgs]);
        // }

        // using call
        // const fn = this;
        // return function(...newArgs) {
        //     return fn.call(context, ...args, ...newArgs);
        // }
    }
}

const getPlayerInfo = function (role, country, age) {
    return `${this.firstName} ${this.lastName}, ${role} from ${country}, age : ${age}`;
};

const player1 = {
    firstName: "Virat",
    lastName: "Kohli",
};

const player2 = {
    firstName: "Hardik",
    lastName: "Pandya",
};

const player1FullInfoCustom = getPlayerInfo.customBind(
    player1,
    "Batsman",
    "India"
);
console.log(player1FullInfoCustom(33));

const player2FullInfoCustom = getPlayerInfo.customBind(
    player2,
    "All-Rounder",
    "India"
);
console.log(player2FullInfoCustom(28));