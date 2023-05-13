const {performance} = require('perf_hooks');
function solve(s, d, m) {    
    // let result = 0;
    
    // for (let i = 0, l = s.length; i < l; i++) {
    //     if (s.slice(i, i + m).reduce((x, y) => x + y) === d) {
    //         result++;
    //     }
    // }
    
    // return result;
    
    let result = 0;
    for (let i=0; i<s.length; i++) {
        let sum = 0;
        for (let j=i; j<i+m; j++) {
            sum += s[j];
        }
        if (sum === d) {
            result++;
        }
    }
    // console.log(result);
    return result;

    // return s.filter((e,i,a) => (a.slice(i,i+m).reduce((aa,cc)=>aa+cc)==d)).length
}

console.log(performance.now());
solve([1,2,1,3,2], 3, 2);
console.log(performance.now());
