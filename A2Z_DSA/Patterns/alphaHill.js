function alphaHill(num) {
    for (let i=0; i<num; i++) {
        let s = '';
        for (let j=0; j<num-i-1; j++) {
            s += ' ';
        }
        for (let k = 0; k <= i; k++) {
            s += String.fromCharCode(65 + k);
        }
        for (let l = i - 1; l >= 0; l--) {
            s += String.fromCharCode(65 + l);
        }
        console.log(s);
    }
}

alphaHill(3);
alphaHill(6);

//      A     
//     ABA    
//    ABCBA   
//   ABCDCBA  
//  ABCDEDCBA 
// ABCDEFEDCBA