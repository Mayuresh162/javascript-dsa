const {performance} = require('perf_hooks');

function addUpto(n) {
    return n * (n + 1) / 2;
}

const t1 = performance.now();
addUpto(1000000000);
const t2 = performance.now();
console.log(`Time elapsed: ${(t2 - t1)/ 1000} seconds.`)