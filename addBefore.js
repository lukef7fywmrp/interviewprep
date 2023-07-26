// My solution
function addBefore(num) {
  if (num === 1) return 1;

  const newNumber = addBefore(num - 1);
  console.log(newNumber);

  return num + newNumber;
}

console.log(addBefore(4));

// Actual solution
function addBefore(num) {
  if (num === 1) return 1;
  return num + addBefore(num - 1);
}
