function isRepdigit(i) {
  if (i < 0) return false;
  return i
    .toString()
    .split("")
    .every((v, i, arr) => v === arr[0]);
}

// Solution
function isRepdigit(num) {
  return new Set("" + num).size === 1;
}

console.log(isRepdigit(6));

console.log(isRepdigit(66));

console.log(isRepdigit(666));

console.log(isRepdigit(6666));

console.log(isRepdigit(1001));

console.log(isRepdigit(-11));
