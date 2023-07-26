const filterArray = (arr) => [...new Set(arr.filter(Number.isInteger))];

console.log(filterArray([1, 2, 2, "a", "b"]), [1, 2]);

console.log(filterArray([1, "a", "b", 0, 15]), [1, 0, 15]);

console.log(filterArray([1, 2, "aasf", "1", "123", 123]), [1, 2, 123]);

console.log(filterArray(["jsyt", 4, "yt", 6]), [4, 6]);

console.log(filterArray(["r", 5, "y", "e", 8, 9]), [5, 8, 9]);

console.log(filterArray(["a", "e", "i", "o", "u"]), []);

console.log(filterArray([4, "z", "f", 5]), [4, 5]);

console.log(filterArray(["abc", 123]), [123]);

console.log(filterArray(["$%^", 567, "&&&"]), [567]);

console.log(
  filterArray(["w", "r", "u", 43, "s", "a", 76, "d", 88]),
  [43, 76, 88]
);
