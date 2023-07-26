// const oddOrEven = (num) => {
//   const numArray = num.toString().split("");

//   console.log(numArray);

//   let count = 0;
//   for (let i = 0; i < numArray.length; i++) {
//     count += Number(numArray[i]);
//   }
//   console.log(count);
//   return count % 2 === 0 ? "EVEN" : "ODD";
// };

// Actual Solution
const oddOrEven = (n) => (eval([...(n + "")].join`+`) % 2 ? "ODD" : "EVEN");

// Actual Solution 2
// function oddOrEven(num) {
//   return [...String(num)].map(Number).reduce((a, v) => a + v) % 2
//     ? "ODD"
//     : "EVEN";
// }

console.log(oddOrEven(4433));
