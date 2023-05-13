function reverseLetterTriangle(num) {
    for(let i=num; i>0; i--) {
        let s = '';
        for (let j=1;j<=i;j++) {
            s += String.fromCharCode(64 + j) + ' ';
        }
        console.log(s);
    }
}

reverseLetterTriangle(3);
reverseLetterTriangle(6);

// A B C D E F
// A B C D E 
// A B C D
// A B C
// A B
// A