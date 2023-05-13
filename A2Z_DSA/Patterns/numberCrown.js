function numberCrown(num) {
    let spaces = 2*(num-1);
    for (let i=1; i<=num; i++) {
        let s = '';
        for (let j=1; j<=i; j++) {
            s += ''+j;
        }
        for(let j=1; j<=spaces;j++){
            s += ' ';
        }
        for(let j=i; j>=1; j--) {
            s += ''+j;
        }
        console.log(s);
        spaces -= 2;
    }
}

numberCrown(3);
numberCrown(6);

// 1          1
// 12        21
// 123      321
// 1234    4321
// 12345  54321
// 123456654321