function isSpecialArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      if (arr[i] % 2 !== 0) return false;
    } else if (arr[i] % 2 === 0) return false;
  }

  return true;
}

// Actual Solution
// const isSpecialArray = (a) => a.every((v, i) => v % 2 == i % 2);

console.log(isSpecialArray([(2, 7, 4, 9, 6, 1, 6, 3)]));
console.log(isSpecialArray([(2, 7, 9, 1, 6, 1, 6, 3)]));
console.log(isSpecialArray([(2, 7, 8, 8, 6, 1, 6, 3)]));
console.log(isSpecialArray([(1, 1, 1, 2)]));
console.log(isSpecialArray([(2, 2, 2, 2)]));
console.log(isSpecialArray([(2, 1, 2, 1)]));
console.log(isSpecialArray([(4, 5, 6, 7)]));
console.log(isSpecialArray([(4, 5, 6, 7, 0, 5)]));
