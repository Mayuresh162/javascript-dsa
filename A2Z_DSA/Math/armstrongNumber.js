function armstrongNumber(num) {
    let reverse = 0;
    let cNum = num;
    const length = num.toString().length;
    while(num != 0) {
        let digit = num % 10;
        reverse += digit ** length; 
        num = Math.floor(num / 10);
    }

    return cNum === reverse ? 'Yes, it is an Armstrong Number' : 'No, it is not an Armstrong Number';
}

console.log(armstrongNumber(153));
console.log(armstrongNumber(170));
console.log(armstrongNumber(1634));