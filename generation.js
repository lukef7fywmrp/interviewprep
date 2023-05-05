// const generations = [
//   {
//     name: "great grandfather",
//     x: -3,
//     y: "m",
//   },
//   {
//     name: "great grandmother",
//     x: -3,
//     y: "f",
//   },
//   {
//     name: "grandfather",
//     x: -2,
//     y: "m",
//   },
//   {
//     name: "grandmother",
//     x: -2,
//     y: "f",
//   },
//   {
//     name: "father",
//     x: -1,
//     y: "m",
//   },
//   {
//     name: "mother",
//     x: -1,
//     y: "f",
//   },
//   {
//     name: "me!",
//     x: 0,
//     y: "m",
//   },
//   {
//     name: "me!",
//     x: 0,
//     y: "f",
//   },
//   {
//     name: "son",
//     x: 1,
//     y: "m",
//   },
//   {
//     name: "daughter",
//     x: 1,
//     y: "f",
//   },
//   {
//     name: "grandson",
//     x: 2,
//     y: "m",
//   },
//   {
//     name: "granddaughter",
//     x: 2,
//     y: "f",
//   },
//   {
//     name: "great grandson",
//     x: 3,
//     y: "m",
//   },
//   {
//     name: "great granddaughter",
//     x: 3,
//     y: "f",
//   },
// ];

// const generation = (x, y) => {
//   return generations.find((person) => person.x === x && person.y === y).name;
// };

// Actual Solution
function generation(x, y) {
  const elo = {
    "-3": {
      m: "great grandfather",
      f: "great grandmother",
    },
    "-2": {
      m: "grandfather",
      f: "grandmother",
    },
    "-1": {
      m: "father",
      f: "mother",
    },
    0: {
      m: "me!",
      f: "me!",
    },
    1: {
      m: "son",
      f: "daughter",
    },
    2: {
      m: "grandson",
      f: "granddaughter",
    },
    3: {
      m: "great grandson",
      f: "great granddaughter",
    },
  };

  return elo[x][y];
}

console.log(generation(-3, "f"));
console.log(generation(-2, "m"));
console.log(generation(-2, "f"));
console.log(generation(-1, "m"));
console.log(generation(-1, "f"));
console.log(generation(0, "f"));
