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
