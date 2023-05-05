function lengthSort(arr) {
  return arr.sort((a, b) => a.length - b.length);
}

console.log(lengthSort(["a", "ccc", "dddd", "bb"]));

console.log(lengthSort(["apple", "pie", "shortcake"]));

console.log(lengthSort(["may", "april", "september", "august"]));

console.log(lengthSort(["maybe"]));

console.log(lengthSort([]));
