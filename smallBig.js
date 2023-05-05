// Solution 1
function smallBig(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });

  return [arr[0], arr[arr.length - 1]];
}

console.log(smallBig([1, 2, 3, 4, 5, 8]));

// Solution 2
function smallBig(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
