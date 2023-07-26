// V = π * r^2 * h

const weight = (r, h) => +(Math.PI * r ** 2 * h * 0.001).toFixed(2);

console.log(weight(4, 10), 0.5);

console.log(weight(30, 60), 169.65);

console.log(weight(15, 10), 7.07);

console.log(weight(20, 40), 50.27);

console.log(weight(100, 30), 942.48);

console.log(weight(200, 300), 37699.11);

console.log(weight(15, 23), 16.26);

console.log(weight(22, 44), 66.9);
