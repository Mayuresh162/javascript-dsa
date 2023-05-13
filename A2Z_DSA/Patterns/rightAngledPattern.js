function rightAngledPat(num) {
    for (let i=0; i<num; i++) {
        let s = '';
        for (let j=0; j<=i; j++) {
            s += '*';
        }
        console.log(s);
    }
}

rightAngledPat(3);
rightAngledPat(6);

// * 
// * * 
// * * *
// * * * *
// * * * * *
// * * * * * *
