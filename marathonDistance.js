function marathonDistance(arr) {
  return arr.reduce((total, value) => total + Math.abs(value), 0) === 25;
}

console.log(marathonDistance([1, 2, 3, 4]));
console.log(marathonDistance([1, 9, 5, 8, 2]));
console.log(marathonDistance([-6, 15, 4]));
console.log(marathonDistance([]));
console.log(marathonDistance([]));
