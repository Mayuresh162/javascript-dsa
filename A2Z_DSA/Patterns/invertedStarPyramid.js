function invertedStarPyramid(num) {
    for (let i=num; i>0; i--) {
        let s = '';
        for (let j=0; j<num-i; j++) {
            s += ' ';
        }
        for (let j=0; j<(2*i-1); j++) {
            s += '*';
        }
        for (let j=0; j<num-i; j++) {
            s += ' ';
        }
        console.log(s);
    }
}

invertedStarPyramid(3);
invertedStarPyramid(6);

// ***********
//  *********
//   *******
//    ***** 
//     ***    
//      *