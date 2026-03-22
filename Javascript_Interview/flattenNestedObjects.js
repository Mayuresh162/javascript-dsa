function flattenObject(obj = {}, parentKey = "") {
  //write your implementation here
  return Object.keys(obj).reduce((acc, key) => {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    const value = obj[key];

    if (typeof value === "object" && value !== null) {
      Object.assign(acc, flattenObject(value, newKey));
    } else {
      acc[newKey] = value;
    }

    return acc;
  }, {});
}
let user = {
  name: "John",
  address: {
    country: "India",
    state: "India",
    education: {
      school: "APS",
      year: 2021,
    },
  },
};
flattenObject(user);
module.exports = flattenObject;
