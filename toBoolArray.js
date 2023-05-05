function toBoolArray(word) {
  return word
    .split('')
    .map((char) => (char.charCodeAt() % 2 === 0 ? false : true));
}

// Solution
const toBoolArray = (word) => [...word].map((i) => Boolean(i.charCodeAt() % 2));

console.log(toBoolArray('charming'));
console.log(toBoolArray('exquisite'));
console.log(toBoolArray('admire'));
console.log(toBoolArray('deep'));
console.log(toBoolArray('loves'));
console.log(toBoolArray('tesh'));
console.log(toBoolArray('xavier'));
console.log(toBoolArray('adores'));
console.log(toBoolArray('tesha'));
console.log(toBoolArray('esquire'));
console.log(toBoolArray('randomize'));
console.log(toBoolArray('exotic'));
