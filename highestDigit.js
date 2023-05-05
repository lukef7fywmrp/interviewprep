function highestDigit(number) {
  return Math.max(...`${number}`);
}

console.log(highestDigit(51));
console.log(highestDigit(0));
console.log(highestDigit(7495037));
console.log(highestDigit(222222));
