function righAngledNumberPyramidII(num) {
    for (let i=0; i<=num; i++) {
        let s = '';
        for (let j=1; j<=i; j++) {
            s += ''+i;
        }
        console.log(s);
    }
}

righAngledNumberPyramidII(3);
righAngledNumberPyramidII(6);

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// 6 6 6 6 6 6