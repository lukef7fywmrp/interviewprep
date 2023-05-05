const positiveDominant = (a) => {
  let positives = new Set(a.filter((n) => n > 0));
  let negatives = new Set(a.filter((n) => n < 0));

  return positives.size > negatives.size;
};

console.log(positiveDominant([1, 1, 1, 1, -3, -4]));
console.log(positiveDominant([5, 99, 832, -3, -4]));
console.log(positiveDominant([5, 0]));
console.log(positiveDominant([0, -4, -1]));
console.log(positiveDominant([1, 2, 3, -1]));
console.log(positiveDominant([1, 0, 0, -1]));
console.log(positiveDominant([5, 4, 3, 0, 0, -1, -1, -2, -2]));
console.log(positiveDominant([52, 52, 52, -3, 2, 2, , 2, -4]));
console.log(positiveDominant([3, 3, 3, 3, -1, -1, -1]));
