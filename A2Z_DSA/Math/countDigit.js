function countDigit(n) {
    // division way
    // let count = 0;
    // while(n != 0) {
    //     n = Math.floor(n / 10);
    //     count++;
    // }
    // console.log(count);

    // string conversion way
    // let str = n.toString();
    // console.log(str.length)

    // logarithmic way
    let res = Math.floor(Math.log10(n) + 1)
    console.log(res);
}

countDigit(12345);
countDigit(8394);