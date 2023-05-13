function subsequence(arr, index=0, n=3, res = []) {
    if (index == n) {
        console.log(res);
        return;
    }
    res.push(arr[index]);
    subsequence(arr, index+1, n, res);
    res.pop();
    subsequence(arr, index+1, n, res);
}

subsequence([3,1,2]);