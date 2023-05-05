function reversedString(s) {
  return s.trim().split(" ").reverse().join(" ");
}

console.log(reversedString("hello world!"));
console.log(reversedString("blue is sky the"));
console.log(reversedString("how are you"));
console.log(reversedString("best! the are You"));
