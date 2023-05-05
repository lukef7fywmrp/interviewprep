function budget(arr) {
  return arr.reduce((prev, val) => prev + val.budget, 0);
}

console.log(
  budget([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 },
  ])
);
console.log(
  budget([
    { name: "John", age: 21, budget: 29000 },
    { name: "Steve", age: 32, budget: 32000 },
    { name: "Martin", age: 16, budget: 1600 },
  ])
);
console.log(
  budget([
    { name: "John", age: 21, budget: 19401 },
    { name: "Steve", age: 32, budget: 12321 },
    { name: "Martin", age: 16, budget: 1204 },
  ])
);
console.log(
  budget([
    { name: "John", age: 21, budget: 10234 },
    { name: "Steve", age: 32, budget: 21754 },
    { name: "Martin", age: 16, budget: 4935 },
  ])
);
