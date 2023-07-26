// const getTotalPrice = (groceries) => {
//   let total = 0;
//   for (let i = 0; i < groceries.length; i++) {
//     total += groceries[i].quantity * groceries[i].price;
//   }

//   return total;
// };

// Actual Solution
function getTotalPrice(groceries) {
  return Number(
    groceries
      .reduce((acc, curr) => (acc += curr.price * curr.quantity), 0)
      .toFixed(2)
  );
}

console.log(getTotalPrice([{ product: 'Milk', quantity: 1, price: 1.5 }]));
console.log(
  getTotalPrice([
    { product: 'Milk', quantity: 1, price: 1.5 },
    { product: 'Cereals', quantity: 1, price: 2.5 },
  ])
);
console.log(getTotalPrice([{ product: 'Milk', quantity: 3, price: 1.5 }]));
console.log(
  getTotalPrice([
    { product: 'Milk', quantity: 1, price: 1.5 },
    { product: 'Eggs', quantity: 12, price: 0.1 },
    { product: 'Bread', quantity: 2, price: 1.6 },
    { product: 'Cheese', quantity: 1, price: 4.5 },
  ])
);
console.log(
  getTotalPrice([
    { product: 'Chocolate', quantity: 1, price: 0.1 },
    { product: 'Lollipop', quantity: 1, price: 0.2 },
  ])
);
