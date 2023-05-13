
function first(arr, low, high, num, length)
{
    if (high >= low)
    {
        // low + (high - low)/2;
        let mid = (low + high) / 2; 
         
        if ((mid == 0 || num > arr[mid - 1]) && arr[mid] == num)
            return mid;
        else if (num > arr[mid])
            return first(arr, (mid + 1), high, num, length);
        else
            return first(arr, low, (mid - 1), num, length);
    }
    return -1;
}

function last(arr, low, high, num, length)
{
    if (high >= low)
    {
        /*low + (high - low)/2;*/     
        let mid = Math.floor((low + high) / 2);
        if ((mid == length - 1 || num < arr[mid + 1]) &&
        arr[mid] == num)
            return mid;
        else if (num < arr[mid])
            return last(arr, low, (mid - 1), num, length);
        else
            return last(arr, (mid + 1), high, num, length);     
    }
    return -1;
}
// A wrapper over recursive function firstZero() 
function sortedFrequency(arr, num) 
{ 

   let i, j;
    
    i = first(arr, 0, (arr.length - 1), num, arr.length);
     
    if (i == -1) return i;
   
    j = last(arr, i, (arr.length - 1), num, arr.length);    
     
    return j - i + 1;
}


sortedFrequency([1,1,2,2,2,2,3],2) // 4 
sortedFrequency([1,1,2,2,2,2,3],3) // 1 
sortedFrequency([1,1,2,2,2,2,3],1) // 2 
sortedFrequency([1,1,2,2,2,2,3],4) // -1



