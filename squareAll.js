const squareAll = (n) =>
  String(n)
    .split("")
    .map((digit) => digit * digit)
    .join("");

console.log(squareAll(9119));
console.log(squareAll(8726));
console.log(squareAll(9763));
console.log(squareAll(2230));
console.log(squareAll(2797));
console.log(squareAll(233));
console.log(squareAll(7437));
console.log(squareAll(2483));
console.log(squareAll(5742));
console.log(squareAll(5636));
console.log(squareAll(841));
