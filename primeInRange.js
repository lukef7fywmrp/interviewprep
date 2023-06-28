// const primeInRange = (n1, n2) => {
//   let range = [];
//   let notPrimeNs = [];
//   for (let i = n1; i <= n2; i++) {
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         notPrimeNs.push(i);
//       }
//     }

//     range.push(i);
//   }

//   return (
//     range.filter((n) => ![...new Set(notPrimeNs)].includes(n)).length !== 0
//   );
// };

// Solution
function primeInRange(n1, n2) {
  return (
    Array.from({ length: (n2 - n1) / 1 + 1 }, (_, i) => n1 + i * 1).filter(
      (number) => {
        for (let i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return false;
        }
        return true;
      }
    ).length > 0
  );
}

let [intVector, resVector] = [
  [
    [10, 12],
    [62, 66],
    [441, 445],
    [0, 2],
    [20, 22],
    [4444, 5555],
    [114, 120],
  ],

  [true, false, true, true, false, true, false],
];

for (let i in intVector)
  console.log(primeInRange(...intVector[i]), resVector[i]);
