const split = (n) => {
  return [Math.floor(n / 2), Math.ceil(n / 2)];
};

console.log(split(4));
console.log(split(10));
console.log(split(11));
console.log(split(0));
console.log(split(1));
console.log(split(-4));
console.log(split(-5));
console.log(split(-9));
