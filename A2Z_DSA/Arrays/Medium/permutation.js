function permutation(arr) {
    const result = [];

    function permuteHelper(currentPerm, remaining) {
      if (remaining.length === 0) {
        result.push(currentPerm);
        return;
      }
  
      for (let i = 0; i < remaining.length; i++) {
        const newPerm = currentPerm.concat(remaining[i]);
        const newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1));
        permuteHelper(newPerm, newRemaining);
      }
    }
  
    permuteHelper([], arr);
    console.log(result);
}

permutation([1,2,3])