function flattenObject(obj) {
    // Your implementation
    const result = {};

    function helper(current, parentKey) {
        for (let key in current) {
            const newKey = parentKey ? `${parentKey}.${key}` : key;
            const value = current[key];

            if (typeof value === "object" && value !== null) {
                helper(value, newKey);
            } else {
                result[newKey] = value;
            }
        }
    }

    helper(obj, "");
    return result;
}
