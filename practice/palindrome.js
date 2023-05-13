// function palindrome(str) {
//     let count = 0;
//     for (let i=0; i<str.length; i++) {
//         if (str[i] !== str[str.length - i -1]) {
//             count = 0;
//         } else {
//             count++;
//         }
//     }
//     return count > 0 ? true : false;
// }

// let NO_OF_CHARS = 256;
   
/* function to check whether characters
of a string can form a palindrome */
// function canFormPalindrome(str)
// {

//     // Create a count array and initialize all
//     // values as 0
//     let count = Array(NO_OF_CHARS).fill(0);

//     // For each character in input strings,
//     // increment count in the corresponding
//     // count array
//     for (let i = 0; i < str.length; i++) count[str[i].charCodeAt()]++;

//     console.log(count);
//     // Count odd occurring characters
//     let odd = 0;
//     for (let i = 0; i < NO_OF_CHARS; i++) {
//         if ((count[i] & 1) == 1)
//             odd++;

//         if (odd > 1)
//             return false;
//     }

//     // Return true if odd count is 0 or 1,
//     return true;
// }

function canFormPalindrome(str)
{
      
    // Create a list
    let list = [];
  
    // For each character in input strings,
    // remove character if list contains
    // else add character to list
    for(let i = 0; i < str.length; i++)
    {
        if (list.includes(str[i]))
            list.splice(list.indexOf(str[i]), 1);
        else
            list.push(str[i]);
    }
       
    // If character length is even
    // list is expected to be empty or
    // if character length is odd list size
    // is expected to be 1
     
    // If string length is even
    if (str.length % 2 == 0 && list.length == 0 || 
       (str.length % 2 == 1 && list.length == 1))
        return true;
     
    // If string length is odd
    else
        return false;
}

console.log(canFormPalindrome('rarecac'));
console.log(canFormPalindrome('racecar'));
console.log(canFormPalindrome('rraacec'));
console.log(canFormPalindrome('abc'));