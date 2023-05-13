function symmetricButterfly(num) {
    //one way
    // let spaces = 2*num - 2;
    // for (let i=0; i<num; i++) {
    //     let s = '';
    //     for (let j=0; j<=i; j++) {
    //         s += '*';
    //     }
    //     for (let j=0; j<spaces; j++) {
    //         s += ' ';
    //     }
    //     for (let j=0; j<=i; j++) {
    //         s += '*';
    //     }
    //     spaces-=2;
    //     console.log(s);
    // }
    // spaces = 2;
    // for (let i=1; i<num; i++) {
    //     let s = '';
    //     for (let j=num; j>i; j--) {
    //         s += '*';
    //     }
    //     for (let j=0; j<spaces; j++) {
    //         s += ' ';
    //     }
    //     for(let j=num; j>i; j--) {
    //         s += '*';
    //     }
    //     spaces+=2;
    //     console.log(s);
    // }

    // another way
    let spaces = 2*num-2;
    for (let i=1; i<=2*num-1; i++) {
        let s = '';
        let stars = i;
        if (i>num) stars = 2*num-i;
        for (let j=1; j<=stars; j++) {
            s += '*';
        }
        for(let j=1; j<=spaces; j++){
            s += ' ';
        }
        for (let j=1; j<=stars;j++) {
            s += '*';
        }
        console.log(s);
        if(i<num) {
            spaces -=2;
        } else {
            spaces +=2;
        }
    }
}

symmetricButterfly(3);
symmetricButterfly(6);

// *          *
// **        **
// ***      ***
// ****    ****
// *****  *****
// ************
// *****  *****
// ****    ****
// ***      ***
// **        **
// *          *