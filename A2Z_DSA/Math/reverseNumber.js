function reverseNumber(n) {
    // one way
    // let res = '';
    // const str = n.toString();
    // for(let i=str.length-1; i >= 0; i--) {
    //     res += str[i];
    // }
    // console.log(res);

    // another way
    let reverse = 0;
    while(n!=0)
    {
        let digit = n % 10;
        reverse = reverse*10 + digit;
        n = Math.floor(n/10);
    }

    console.log(reverse);
}

reverseNumber(123);
reverseNumber(234);