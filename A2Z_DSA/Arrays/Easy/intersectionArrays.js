function intersectionArrays(a1, a2) {
    const res = [];

    // one way
    // for (let e2 of a2) {
    //     if (a1.indexOf(e2) !== -1) {
    //         res.push(e2);
    //     }
    // }

    // another way
    let i=0; 
    let j=0;
    while (i < a1.length && j < a2.length) {
      
        if (a1[i] < a2[j]) { 
          i++;
        } else if (a2[j] < a1[i]) {
          j++;
        } else {
          res.push(a1[i]);
          i++;
          j++;
        }
    }
    console.log(res);
}

intersectionArrays([1,2,3,3,4,5,6], [3,3,5]);
intersectionArrays([1,2,3,3,4,5,6], [3,5]);