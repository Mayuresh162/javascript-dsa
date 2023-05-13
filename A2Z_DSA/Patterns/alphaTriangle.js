function alphaTriangle(num) {
    for (let i=0; i<num; i++) {
        let s = '';
        for (let j=i; j>=0; j--) {
            s += String.fromCharCode(64 + num - j) + ' ';
        }
        console.log(s);
    }
}

alphaTriangle(3);
alphaTriangle(6);

// F
// E F
// D E F
// C D E F
// B C D E F
// A B C D E F