function invertedNumberRightPyramid(num) {
    for (let i=num; i > 0; i--) {
        let s = '';
        for (let j=1; j<=i; j++) {
            s += ''+j;
        }
        console.log(s);
    }
}

invertedNumberRightPyramid(3);
invertedNumberRightPyramid(6);

// 1 2 3 4 5 6
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2 
// 1