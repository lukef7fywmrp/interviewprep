const elementSum = (arr) =>
  arr.filter((item) => typeof item === "number").reduce((a, c) => a + c, 0);

console.log(elementSum([1, 2, "13", "4", "645"]));

console.log(elementSum([true, false, "123", "75"]));

console.log(elementSum([1, 2, 3, 4, 5, true]));

console.log(elementSum(["abcd", 1234, false, true, 564, "hii"]));

console.log(elementSum(["abcd", "abc45", "assssd", true]));

console.log(elementSum([]));

console.log(elementSum(["cghyki", "cd", 12114, 786, true, "me", "bey"]));
