function capitalizeFirst(array) {
    // add whatever parameters you deem necessary - good luck!
    // let newArr = [];
    // console.log(arr[0]);
    // const word = arr[0];
    // let newWord = '';
    // if (arr.length === 0) return null;
    // for(let i=0; i<word.length; i++) {
    //     if (i === 0) {
    //         newWord = newWord.concat(word[i].toUpperCase());
    //     } else {
    //         newWord = newWord.concat(word[i].toLowerCase());
    //     }
    // }
    // newArr.push(newWord);
    // capitalizeFirst(arr.slice(arr.length-1));
    // console.log('new', newArr, newArr.length);
    // return newArr;

    if (array.length === 1) {
        return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    console.log('array', array)
    const res = capitalizeFirst(array.slice(0, -1));
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
    res.push(string);
    return res;
}
  
console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']