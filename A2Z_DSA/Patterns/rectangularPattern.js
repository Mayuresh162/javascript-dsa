function rectPat(num) {
    for(let i=1; i<=num; i++) {
        let s = '';
        for (let j=1; j<=num; j++) {
            s += '*'
        }
        console.log(s);
    }
}

rectPat(3);
rectPat(6);

// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *