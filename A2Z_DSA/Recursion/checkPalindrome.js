function checkPalindrome(str, i=0) {
    // one way
    // let res = '';
    // for (let i=str.length-1; i>=0; i--) {
    //     res += str[i];
    // }
    // console.log(res == str ? 'Palindrome' : 'Not Palindrome');

    //another way
    // let left = 0;
    // let right = str.length-1;
    // while (left<right) {
    //     if (str[left] != str[right]) {
    //         console.log('Not Palindrome');
    //         return;
    //     } else {
    //         left++;
    //         right--;
    //     }
    // }
    // console.log('Palindrome');

    // recursive way
    if (i >= str.length/2) {
        console.log('Palindrome');
        return;
    }
    if (str[i] != str[str.length - i -1]) {
        console.log('Not Palindrome');
        return;
    }
    checkPalindrome(str, i+1);
}

checkPalindrome('ABCDCBA')
checkPalindrome('TAKE U FORWARD')
checkPalindrome('MADAM')