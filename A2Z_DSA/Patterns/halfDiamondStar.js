function halfDiamondStar(num) {
    // one way
    // for (let i=0; i<num; i++) {
    //     let s = '';
    //     for (let j=0; j<=i; j++) {
    //         s += '*';
    //     }
    //     console.log(s);
    // }

    // for (let i=num; i>0; i--) {
    //     let s = '';
    //     for (let j=0; j<i-1; j++) {
    //         s+= '*';
    //     }
    //     console.log(s);
    // }

    // another way
    for (let i=0; i<=2*num-1; i++) {
        let stars = i;
        let s = '';
        if (i>num) {
            stars = 2 * num - i;
        }
        for(let j=1;j<=stars;j++){
            s += '*';
        }
        console.log(s);
    }
}

halfDiamondStar(3)
halfDiamondStar(6)

// *
// **
// *** 
// ****
// *****
// ******  
// *****
// ****
// ***    
// **
// *