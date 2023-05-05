function concatenate(...args) {
  return [].concat(...args);
}

// Actual Solution 2
// const concatenate = (...a) => a.flat(Infinity);

console.log(concatenate([1, 2, 3], [4, 5], [6, 7]));
