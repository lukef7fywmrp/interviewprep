// const countOnes = (n) => [...n.toString(2)].filter((x) => x === "1").length;

// Solution
function countOnes(i) {
  return (i >>> 0).toString(2).replace(/0/g, "").length;
}

console.log(countOnes(12), 2);

console.log(countOnes(0), 0);

console.log(countOnes(100), 3);

console.log(countOnes(101), 4);

console.log(countOnes(999), 8);

console.log(countOnes(1e9), 13);

console.log(countOnes(123456789), 16);

console.log(countOnes(1234567890), 12);
