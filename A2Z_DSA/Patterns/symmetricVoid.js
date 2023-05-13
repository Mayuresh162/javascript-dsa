function symmetricVoid(num) {
    let spaces = 0;
    for (let i=0; i<num; i++) {
        let s = '';
        for (let j=num; j>i; j--) {
            s += '*';
        }
        for (let j=0; j<spaces; j++) {
            s += ' ';
        }
        for(let j=num; j>i; j--) {
            s += '*';
        }
        spaces+=2;
        console.log(s);
    }
    spaces = 2*num - 2;
    for (let i=0; i<num; i++) {
        let s = '';
        for (let j=0; j<=i; j++) {
            s += '*';
        }
        for (let j=0; j<spaces; j++) {
            s += ' ';
        }
        for (let j=0; j<=i; j++) {
            s += '*';
        }
        spaces-=2;
        console.log(s);
    }
}

symmetricVoid(3);
symmetricVoid(6);

// ************
// *****  *****
// ****    ****
// ***      ***
// **        **
// *          *
// *          *
// **        **
// ***      ***
// ****    ****
// *****  *****
// ************