function starPyramid(num) {
    for (let i=0; i<num; i++) {
        let s = '';
        for (let j=0; j<num-i-1; j++) {
            s += ' ';
        }
        for (let j=0; j<(2*i+1); j++) {
            s += '*';
        }
        for (let j=0; j<num-i-1; j++) {
            s += ' ';
        }
        console.log(s);
    }
}

starPyramid(3);
starPyramid(6);


//      *     
//     ***    
//    *****   
//   *******  
//  ********* 
// ***********