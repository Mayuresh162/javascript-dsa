function binaryNumberTriangle(num) {
    for (let i=0; i<=num; i++) {
        let s = '';
        for (let j=1; j<=i;j++) {
            s = (j%2) + s;
        }
        console.log(s);
    }
}  

binaryNumberTriangle(3);
binaryNumberTriangle(6);

// 1
// 01
// 101
// 0101
// 10101
// 010101