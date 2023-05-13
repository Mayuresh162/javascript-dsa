function alphaRamp(num) {
    for (let i=1; i<=num; i++) {
        let s = '';
        for (let j=0; j<i;j++) {
            s += String.fromCharCode(64 + i) + ' ';
        }
        console.log(s);
    }
}

alphaRamp(3);
alphaRamp(6);

// A 
// B B
// C C C
// D D D D
// E E E E E
// F F F F F F