if (!Function.prototype.customCall) {
    Function.prototype.customCall = function(context, ...args) {
        const uniqueSymbol = Symbol();
        context[uniqueSymbol] = this;
        const result = context[uniqueSymbol](...args);
        delete context[uniqueSymbol];
      
        return result;
    }
}

const getPlayerInfo = function (role, country) {
    console.log(`${this.firstName} ${this.lastName}, ${role} from ${country}`);
};

const player1 = {
    firstName: "Virat",
    lastName: "Kohli",
    age: 33,

    // method of player 1
    getAge: function () {
        console.log(`${this.firstName}'s age is ${this.age}`);
    },
};

const player2 = {
    firstName: "Hardik",
    lastName: "Pandya",
    age: 28,
};

getPlayerInfo.customCall(player1, "Batsman", "India");

getPlayerInfo.customCall(player2, "All-Rounder", "India");
