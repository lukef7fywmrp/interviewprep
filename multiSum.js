// function multiSum(number) {
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     sum += number * i;
//   }

//   return sum;
// }

function multiSum(num, ten = 10) {
  if (ten == 0) {
    return 0;
  }

  return ten * num + multiSum(num, ten - 1);
}

console.log(multiSum(1));
console.log(multiSum(2));
console.log(multiSum(3));
console.log(multiSum(4));
console.log(multiSum(5));
console.log(multiSum(6));
console.log(multiSum(7));
console.log(multiSum(8));
console.log(multiSum(9));
console.log(multiSum(10));
