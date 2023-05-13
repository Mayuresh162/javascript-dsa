function capitalizeWords(array) {
    // add whatever parameters you deem necessary - good luck!
    if (array.length === 1) {
        return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length-1)[0].toUpperCase());
    return res;
}

  let words = ['i', 'am', 'learning', 'recursion'];
  capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']