// Solution
// const noDuplicates = (arr) => [...new Set(arr)];

// Alternate Solution
const noDuplicates = (items) => {
  return items.filter((item, i, arr) => arr.indexOf(item) === i);
};

console.log(noDuplicates(["Sonny", "Sangha", "Sonny"]));
console.log(noDuplicates(["John", "Taylor", "John", "john"]));
console.log(noDuplicates([1, 2, 2, 2, 3, 2, 5, 2, 6, 6, 3, 7, 1, 2, 5]));
console.log(noDuplicates(["#", "#", "%", "&", "#", "$", "&"]));
console.log(noDuplicates([3, "Apple", 3, "Orange", "Apple"]));
