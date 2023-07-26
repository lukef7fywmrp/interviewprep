// const repeater = (str, num) => (num <= 0 ? "" : Boolean(str.repeat(num)));

// Actual Solution
function repeater(str, num) {
  s = "";
  for (let i = 0; i < num; i++) {
    s += str;
  }
  return s;
}

console.log(repeater("A", 268435440));
console.log(repeater("A", 10000000));
console.log(repeater("A", 100));
console.log(repeater("A", 10));
console.log(repeater("A", 1));
console.log(repeater("-", 1));
console.log(repeater("-", 10));
console.log(repeater("-", 100));
console.log(repeater("/", 268435440));
console.log(repeater("!", 268435440));
console.log(repeater("?", 268435440));
console.log(repeater("°", 268435440));
