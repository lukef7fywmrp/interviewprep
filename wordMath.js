const wordMath = (str) => {
  let map = {
    zero: "0",
    one: "1",
    two: "2",
  };

  let map2 = {
    0: "Zero",
    1: "One",
    2: "Two",
    "-1": "Zero",
  };

  let arr = str.toLowerCase().split(" ");

  let operator = {
    plus: "+",
    minus: "-",
  };

  return map2[eval(map[arr[0]] + operator[arr[1]] + map[arr[2]]).toString()];
};

// function stringToNum(str) {
//   if (str.toLowerCase() === "zero") {
//     return 0;
//   } else if (str.toLowerCase() === "one") {
//     return 1;
//   } else {
//     return 2;
//   }
// }
// function numToString(num) {
//   if (num === 0) {
//     return "Zero";
//   } else if (num === 1) {
//     return "One";
//   } else {
//     return "Two";
//   }
// }

// function wordMath(expr) {
//   expr = expr.split(" ");

//   if (expr[1].toLowerCase() === "plus") {
//     return numToString(stringToNum(expr[0]) + stringToNum(expr[2]));
//   } else {
//     return numToString(stringToNum(expr[0]) - stringToNum(expr[2]));
//   }
// }

console.log(wordMath("One plus one"));
console.log(wordMath("Zero Plus one"));
console.log(wordMath("One minus one"));
console.log(wordMath("Two plus zero"));
console.log(wordMath("zero minus one"));
console.log(wordMath("Two minus one"));
