function allAboutStrings(s) {
  let length = s.length;
  let firstChar = s.slice(0, 1);
  let lastChar = s.slice(length - 1, length);
  let middleChars =
    length % 2
      ? s.slice(Math.floor(length / 2), Math.ceil(length / 2))
      : s.slice(length / 2 - 1, length / 2 + 1);

  let secondOcc =
    s.indexOf(s[1], 2) === -1 ? "not found" : `@ index ${s.indexOf(s[1], 2)}`;

  return [length, firstChar, lastChar, middleChars, secondOcc];
}

console.log(allAboutStrings("LASA"), [4, "L", "A", "AS", "@ index 3"]);

console.log(allAboutStrings("Computer"), [8, "C", "r", "pu", "not found"]);

console.log(allAboutStrings("Science"), [7, "S", "e", "e", "@ index 5"]);

console.log(allAboutStrings("homework"), [8, "h", "k", "ew", "@ index 5"]);

console.log(allAboutStrings("spring"), [6, "s", "g", "ri", "not found"]);

console.log(allAboutStrings("break"), [5, "b", "k", "e", "not found"]);

console.log(allAboutStrings("programming"), [11, "p", "g", "a", "@ index 4"]);

console.log(allAboutStrings("bad"), [3, "b", "d", "a", "not found"]);
