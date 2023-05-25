function pascalTriangle(numRows, numCols) {
    // my logic 
    // const res = [];

    // for(let i=0;i<numRows;i++){
    //     let row = [];
    //     for(let j=0;j<=i;j++){
    //         if(j==0 || j==i){
    //             row.push(1);
    //         }else{
    //             row.push(res[i-1][j-1]+res[i-1][j]);
    //         }
    //     }
    //     res.push(row);
    // }

    // console.log(res);

    // variation 1 brute force [nCr = n! / (r! * (n-r)!)]
    // let res = 1;    
    // let n = numRows - 1;
    // let r = numCols - 1;
    // // calculating nCr:
    // for (let i = 0; i < r; i++) {
    //   res = res * (n - i);
    //   res = res / (i + 1);
    // }
    // console.log(res);

    // variation 2 brute force
    // function nCr(n, r) {
    //     let res = 1;
      
    //     // calculating nCr:
    //     for (let i = 0; i < r; i++) {
    //       res = res * (n - i);
    //       res = res / (i + 1);
    //     }
    //     return res;
    // }

    // for (let c = 1; c <= numRows; c++) {
    //     console.log(nCr(numRows - 1, c - 1) + " ");
    // }
    // console.log("\n");

    // variation 2 optimal approach
    // let ans = 1;
    // console.log(ans + " ");

    // for (let i = 1; i < numRows; i++) {
    //     ans = ans * (numRows - i);
    //     ans = ans / i;
    //     console.log(ans + " ");
    // }
    // console.log("\n");

    // variation 3 brute force
    // const ans = [];

    // //Store the entire pascal's triangle:
    // for (let row = 1; row <= numRows; row++) {
    //     const tempLst = []; // temporary list
    //     for (let col = 1; col <= row; col++) {
    //         tempLst.push(nCr(row - 1, col - 1));
    //     }
    //     ans.push(tempLst);
    // }
    // console.log(ans);

    // variation 3 optimal approach
    function generateRow(n) {
        let ans = 1;
        const res = [];
        res.push(ans);

        for (let col=1; col<n; col++) {
            ans = ans * (n-col);
            ans = ans/col;
            res.push(ans);
        }
        return res;
    }

    const result = [];
    for (let i=1; i<=numRows; i++) {
        result.push(generateRow(i));
    }
    console.log(result);
}

// pascalTriangle(5, 3);
pascalTriangle(4);