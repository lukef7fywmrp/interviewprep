function progressDays(runs) {
  let days = 0;
  for (let i = 1; i < runs.length; i++) {
    if (runs[i] > runs[i - 1]) {
      days++;
    }
  }

  return days;
}

// Solution
// function progressDays(runs) {
//   return runs.filter((e, i, a) => e < a[i + 1]).length;
// }

console.log(progressDays([3, 4, 1, 2]), 2);

console.log(progressDays([10, 11, 12, 9, 10]), 3);

console.log(progressDays([6, 5, 4, 3, 2, 9]), 1);

console.log(progressDays([9, 9]), 0);

console.log(progressDays([12, 11, 10, 12, 11, 13]), 2);
