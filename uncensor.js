// function uncensor(str, vowels) {
//   let arr = [...vowels];
//   return str
//     .split("")
//     .map((item) => (item === "*" ? item.replace("*", arr.shift()) : item))
//     .join("");
// }

function uncensor(str, vowels) {
  for (let i = 0; i < vowels.length; i++) {
    str = str.replace("*", vowels[i]);
  }
  return str;
}

console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"));
console.log(uncensor("abcd", ""));
console.log(uncensor("*PP*RC*S*", "UEAE"));
console.log(uncensor("Ch**s*, Gr*mm*t —— ch**s*", "eeeoieee"));
console.log(uncensor("*l*ph*nt", "Eea"));
