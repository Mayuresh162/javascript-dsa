function isPalindrome(val) {
       
    // Declaring variables
    let n, k, rev = 0;
    
    // storing num in n so that we can compare it later
    n = val;
    
    // while num is not 0 we find its reverse and store
    // in rev
    while (val != 0) {
        k = val % 10;
        rev = (rev * 10) + k;
        val = Math.floor(val / 10);
    }
    
    // check if num and its reverse are same
    if (n == rev) {
        return 1;
    } else {
        return 0;
    }
}

let num = 105;

while (isPalindrome(num) == 0) {
    num = num + 1;
}

console.log(num);