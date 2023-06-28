const getFrequencies = (arr) =>
  arr.reduce((map, item) => {
    map[item] = map[item] + 1 || 1;
    return map;
  }, {});

console.log(getFrequencies(["A", "A"]), { A: 2 });

console.log(getFrequencies(["A", "B", "A", "A", "A"]), { A: 4, B: 1 });

console.log(getFrequencies(["A", "B", "C", "A", "A"]), { A: 3, B: 1, C: 1 });

console.log(getFrequencies([true, false, true, false, false]), {
  true: 2,
  false: 3,
});

console.log(getFrequencies([1, 2, 3, 3, 2]), { 1: 1, 2: 2, 3: 2 });

console.log(getFrequencies([]), {});
