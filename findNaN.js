const findNaN = (a) => a.findIndex(isNaN);

console.log(findNaN([1, 2, NaN, 3]), 2);

console.log(findNaN([1, 2, 3, NaN, 3, 4, 5, 3]), 3);

console.log(findNaN([1, 2, 3, 4, 5]), -1);

console.log(findNaN([NaN, 2, 3, 4]), 0);

console.log(findNaN([1, 2, 3]), -1);
