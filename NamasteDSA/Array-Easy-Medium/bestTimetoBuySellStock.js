var maxProfit = function (prices) {
  // one way
  // let max = 0;
  // let min = Infinity;
  // for (let elem of prices) {
  //     min = Math.min(elem, min);
  //     max = Math.max(max, elem - min)
  // }
  // return max;

  // second way
  let max = 0;
  let min = prices[0];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] - min > max) {
      max = prices[i] - min;
    }
    if (prices[i] < min) {
      min = prices[i];
    }
  }
  return max;
};
