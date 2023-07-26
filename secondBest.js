const secondBest = (numbers) => {
  if (numbers.length < 2)
    return "There should be at least 2 numbers in the array";

  return numbers.sort((a, b) => a - b)[numbers.length - 2];
};

console.log(secondBest([10, 40, 30, 20, 50]));
console.log(secondBest([25, 143, 89, 13, 105]));
console.log(secondBest([54, 23, 11, 17, 10]));
console.log(secondBest([513, 211, 131, 417, 11]));
console.log(secondBest([53, 44, 11, 22, 33, 66, 65]));

// Actual Solution
function secondBest(arr) {
  return arr.sort((a, b) => b - a)[1];
}
