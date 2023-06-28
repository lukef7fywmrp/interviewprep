function XO(str) {
  return (
    str
      .toLowerCase()
      .split("")
      .filter((c) => c === "x").length ===
    str
      .toLowerCase()
      .split("")
      .filter((c) => c === "o").length
  );
}

console.log(XO("ooxx"), true);

console.log(XO("xooxx"), false);

console.log(XO("ooxXm"), true);

console.log(XO("zpzpzpp"), true);

console.log(XO("zzoo"), false);

console.log(XO("Xo"), true);

console.log(XO("x"), false);

console.log(XO("o"), false);

console.log(XO("xxxoo"), false);

console.log(XO(""), true);
