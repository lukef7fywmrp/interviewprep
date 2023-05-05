// const fuel = (distance) => (distance * 10 < 100 ? 100 : distance * 10);

// Actual Solution
const fuel = (n) => Math.max(100, n * 10);

console.log(fuel(15));
console.log(fuel(23));
console.log(fuel(10));
console.log(fuel(3));
console.log(fuel(23.5));
console.log(fuel(3.14));
console.log(fuel(9.99999));
console.log(fuel(822315322));
console.log(fuel(12345.6789));
console.log(fuel(31.41));
