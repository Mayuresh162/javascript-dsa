function threeSum(arr) {
    // brute force
    // const set = new Set();

    // for (let i=0; i<arr.length-2; i++) {
    //     for (let j=i+1; j<arr.length-1; j++) {
    //         for (let k=j+1; k<arr.length; k++) {
    //             const temp = [];
    //             if (arr[i] + arr[j] + arr[k] == 0) {
    //                 temp.push(arr[i]);
    //                 temp.push(arr[j]);
    //                 temp.push(arr[k]);
    //             }
    //             if (temp.length != 0) {
    //                 set.add(temp);
    //             }
    //         }
    //     }
    // }
    // console.log(set);

    // better approach
    // const results = [];
  
    // arr.sort((a, b) => a - b);
    
    // for (let i = 0; i < arr.length - 2; i++) {
    //     if (i > 0 && arr[i] === arr[i - 1]) continue;
        
    //     const set = new Set();
        
    //     for (let j = i + 1; j < arr.length; j++) {
    //     const k = -arr[i] - arr[j];
        
    //     if (set.has(k)) {
    //         results.push([arr[i], k, arr[j]]);
            
    //         while (arr[j] === arr[j + 1]) j++;
    //     }
        
    //     set.add(arr[j]);
    //     }
    // }
    // console.log(results);

    //optimal approach
    const obj={};
    arr=arr.sort((a,b)=>a-b);
    for(let start=0;start<arr.length;start++){
        let right=arr.length-1;
        let left=start+1;
        while(left<right){
            if(arr[left]+arr[right]+arr[start]==0){
                obj[[arr[start],arr[left],arr[right]]]=[arr[start],arr[left],arr[right]]
                left++;
                right--;
            }else if(arr[left]+arr[right]+arr[start]>0){
                right--;
            }else if(arr[left]+arr[right]+arr[start]<0){
                left++;
            }
        }
    }
    console.log(Object.values(obj));
}

threeSum([-1,0,1,2,-1,-4]);