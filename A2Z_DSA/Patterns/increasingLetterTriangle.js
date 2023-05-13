function increasingLetterTriangle(num) {
    for(let i=1; i<=num; i++) {
        let s = '';
        for (let j=1;j<=i;j++) {
            s += String.fromCharCode(64 + j) + ' ';
        }
        console.log(s);
    }
}

increasingLetterTriangle(3);
increasingLetterTriangle(6);

// A
// A B
// A B C
// A B C D
// A B C D E
// A B C D E F