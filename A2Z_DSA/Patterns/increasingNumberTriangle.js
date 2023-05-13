function increasingNumberTriangle(num) {
    let count = 1;
    for(let i=0; i<num; i++) {
        let s = '';
        for (let j=0;j<=i;j++) {
            s += ''+count+' ';
            count++;
        }
        console.log(s);
    }
}

increasingNumberTriangle(3);
increasingNumberTriangle(6);

// 1
// 2  3
// 4  5  6
// 7  8  9  10
// 11  12  13  14  15
// 16  17  18  19  20  21