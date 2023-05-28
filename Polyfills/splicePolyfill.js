if (!Array.prototype.customSplice) {
    Array.prototype.customSplice = function(startIndex, numItems){
      let array = this;
      if (startIndex !== undefined && numItems === undefined) {
        numItems = array.length;
      }
      startIndex = Number(startIndex);
      if (startIndex < 0) {
        startIndex = array.length + startIndex;
      }
      if (isNaN(startIndex)) {
        startIndex = 0;
      }
      if (isNaN(numItems) || numItems < 0) {
        numItems = 0;
      }
      let endIndex = startIndex + numItems;
  
      let itemsBeforeSplice = []; // array till startIndex
      let splicedItems = []; // removed items array
      let itemsAfterSplice = []; // array from endIndex
  
      for( let i = 0; i < array.length; i++ ){
          if( i < startIndex ){ itemsBeforeSplice.push( array[i] ); } 
          if( i >= startIndex && i < endIndex ){ splicedItems.push( array[i] ); }
          if( i >= endIndex ){ itemsAfterSplice.push( array[i] ); }      
      }
  
      // Insert all arguments/parameters after numItems
      for(let i = 2;i < arguments.length; i++){
        itemsBeforeSplice.push(arguments[i]);
      }
  
      // Combine before/after arrays
      let remainingItems = itemsBeforeSplice.concat( itemsAfterSplice );
  
      // Rewrite array
      for(let i = 0, len=Math.max( array.length, remainingItems.length ); i < len; i++ ){
        if( remainingItems.length > i ){
          array[i] = remainingItems[i];
        } else {
          array.pop();
        }
      }
      return splicedItems;
    }
}

const customNumbers = [10, 11, 12, 13, 14, 15];

const deletedCustomNums = customNumbers.customSplice(-4, 3, 77, 88, 99);
console.log(customNumbers, deletedCustomNums);