console.log(sum(-1)(0)); //-1


console.log(sum(5)(-1)); //4


console.log(sum(5,0)); //5


console.log(sum(5,-1)) //4


function sum(a,b) {
    if (b) {
        return a+b;
    } else {
        return function(b) {
            return a + b;
        }
    }
}