function sortByLength(arr) {
  return arr.sort((a, b) => a.length - b.length);
}

console.log(sortByLength(["Google", "Apple", "Microsoft"]));

console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]));

console.log(sortByLength(["Turing", "Einstein", "Jung"]));

console.log(sortByLength(["Tatooine", "Hoth", "Yavin", "Dantooine"]));

console.log(sortByLength(["Mario", "Bowser", "Link"]));
