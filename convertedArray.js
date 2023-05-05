function convertedArray(obj) {
  return Object.entries(obj);
}

console.log(convertedArray({ a: 453, b: 451 }));
console.log(convertedArray({ foo: 33, bar: 45, baz: 67 }));
console.log(convertedArray({}));
