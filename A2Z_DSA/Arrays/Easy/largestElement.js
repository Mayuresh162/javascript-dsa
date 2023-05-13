function largestElement(arr) {
    // one way
    const max = arr.reduce((acc, curr) => {
        if (curr > acc) {
            acc = curr;
        }
        return acc;
    }, 0)
    console.log(max);

    // predefined methods 
    // console.log(Math.max(...arr));

    // using sort method
    // console.log(arr.sort((a,b) => a - b)[arr.length-1]);
}

largestElement([8,10,5,7,9]);
largestElement([2,5,1,3,0]);