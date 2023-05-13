function rightAngledNumberPat(num) {
    for (let i=0; i<=num; i++) {
        let s = '';
        for (let j=1; j<=i; j++) {
            s += ''+j;
        }
        console.log(s);
    }
}

rightAngledNumberPat(3);
rightAngledNumberPat(6);

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6