function checkPalindromeNumber(num) {
    let reverse = 0;
    let cNum = num;
    while(num != 0) {
        let digit = num % 10;
        reverse = reverse * 10 + digit;
        num = Math.floor(num / 10);
    }

    return cNum === reverse ? 'Palindrome Number' : 'Not Palindrome Number';
}

console.log(checkPalindromeNumber(123));
console.log(checkPalindromeNumber(121));