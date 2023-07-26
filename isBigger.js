function isBigger(first, second) {
  if (first() > second()) {
    return "first";
  } else if (first() === second()) {
    return "both";
  } else {
    return "second";
  }
}

console.log(
  isBigger(
    () => -100,
    () => 0
  )
);

// Actual solution
function isBigger(first, second) {
  return first() > second() ? "first" : second() > first() ? "second" : "both";
}
