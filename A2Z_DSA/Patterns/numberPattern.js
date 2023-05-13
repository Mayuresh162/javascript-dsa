function numberPattern(num) {
    for (let i=0; i<2*num-1; i++) {
        let s = '';
        for (let j=0; j<2*num-1; j++) {
            let top = i;
            let bottom = j;
            let right = (2*num - 2) - j;
            let left = (2*num - 2) - i;
            s += '' + (num - Math.min(Math.min(top, bottom), Math.min(left, right)));
        }
        console.log(s);
    }
}

numberPattern(3);
numberPattern(6);

// 6 6 6 6 6 6 6 6 6 6 6 
// 6 5 5 5 5 5 5 5 5 5 6 
// 6 5 4 4 4 4 4 4 4 5 6 
// 6 5 4 3 3 3 3 3 4 5 6 
// 6 5 4 3 2 2 2 3 4 5 6 
// 6 5 4 3 2 1 2 3 4 5 6 
// 6 5 4 3 2 2 2 3 4 5 6 
// 6 5 4 3 3 3 3 3 4 5 6 
// 6 5 4 4 4 4 4 4 4 5 6 
// 6 5 5 5 5 5 5 5 5 5 6 
// 6 6 6 6 6 6 6 6 6 6 6