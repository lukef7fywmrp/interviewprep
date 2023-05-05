// const digits = (number) => ("" + Math.abs(number)).length;

// Expert level: Try to solve it without using strings!
const digits = (number) => {
  let n = Math.abs(number),
    i = 1;
  while ((n /= 10) >= 1) {
    i++;
  }
  return i;
};

console.log(digits(0));
