// const factorial2 = (n) => (n ? n * factorial2(--n) : 1);

// Solution
const factorial2 = (num) => (num === 1 ? num : num * factorial2(num - 1));

console.log(factorial2(2), 2);

console.log(factorial2(6), 720);

console.log(factorial2(3), 6);

console.log(factorial2(12), 479001600);

console.log(factorial2(5), 120);
