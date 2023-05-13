function diamondStar(num) {
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

diamondStar(3);
diamondStar(6);

//      *
//     ***
//    ***** 
//   *******
//  *********
// ***********  
// ***********
//  *********
//   *******
//    ***** 
//     ***    
//      *