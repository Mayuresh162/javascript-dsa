function flattenObject(obj) {
    // Your implementation
    const result = {};

    function helper(current, parentKey) {
        for (let key in current) {
            const newKey = parentKey ? `${parentKey}.${key}` : key;
            const value = current[key];

            if (typeof value === "object" && value !== null) {
                if (Array.isArray(value)) {
                    result[newKey] = value;
                } else {
                    helper(value, newKey);
                }
            } else {
                result[newKey] = value;
            }
        }
    }

    helper(obj, "");
    return result;
}


function flatten(curr, parentKey = "") {
   return Object.keys(curr).reduce((acc, key) => {
       const newKey = parentKey ? `${parentKey}_${key}` : key;
       const val = curr[key];
       
       if (typeof val == "object") {
           Object.assign(acc, flatten(val, newKey));
       } else { 
           acc[newKey] = val;
       }
       
       return acc;
   }, {})
}

const obj = {a: 1, b: {c: 2}}
console.log(flatten(obj))
