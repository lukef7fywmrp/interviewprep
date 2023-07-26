// const multiplicativePersistence = (n) => {
//   if (n.toString().length === 1) return 0;

//   let count = 0;
//   let firstValue = +n.toString().split()[0];
//   while (n.toString().length !== 1) {
//     n = n
//       .toString()
//       .split("")
//       .reduce((a, c, i) => a * (i === 0 ? 1 : +c), firstValue);
//     count++;
//   }

//   return count;
// };

// Solution
function multiplicativePersistence(n) {
  let count = 0;
  while (String(n).length > 1) {
    n = [...String(n)].reduce((a, b) => +a * +b);
    count++;
  }
  return count;
}

console.log(multiplicativePersistence(7), 0);

console.log(multiplicativePersistence(1234567890), 1);

console.log(multiplicativePersistence(39), 3);

console.log(multiplicativePersistence(6788), 6);

console.log(multiplicativePersistence(277777788888899), 11);
