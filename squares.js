const squares = (n) => {
  return n > 1 ? n ** 2 + squares(n - 1) : 1;
};

console.log(squares(3));
console.log(squares(10));
console.log(squares(12));
console.log(squares(5));
console.log(squares(9));
console.log(squares(11));
console.log(squares(15));
