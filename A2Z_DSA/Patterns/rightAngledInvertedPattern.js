function rightAngledInvertedPat(num) {
    for (let i=num; i>0; i--) {
        let s = '';
        for (let j=0; j<i; j++) {
            s += '*';
        }
        console.log(s);
    }
}

rightAngledInvertedPat(3);
rightAngledInvertedPat(6);

// * * * * * *
// * * * * * 
// * * * * 
// * * * 
// * * 
// *
