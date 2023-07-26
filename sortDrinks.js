function sortDrinks(drinks) {
  return drinks.sort((a, b) => a.price - b.price);
}

const drinks1 = [
  { name: "lemonade", price: 90 },
  { name: "lime", price: 432 },
  { name: "peach", price: 23 },
];

const drinks2 = [
  { name: "water", price: 120 },
  { name: "lime", price: 80 },
  { name: "peach", price: 90 },
];

console.log(sortDrinks(drinks1));
console.log(sortDrinks(drinks2));
