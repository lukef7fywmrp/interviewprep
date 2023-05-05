function christmasEve(date) {
  const day = date.getDate();
  const month = date.getMonth();
  if (day === 24 && month === 11) {
    return true;
  } else {
    return false;
  }
}

console.log(christmasEve(new Date(2003, 11, 24)));
console.log(christmasEve(new Date(3026, 11, 24)));
console.log(christmasEve(new Date(2154, 11, 11)));
console.log(christmasEve(new Date(2010, 11, 2)));
console.log(christmasEve(new Date(1980, 9, 24)));

// Actual solution 1
function christmasEve(date) {
  return date.getMonth() === 12 && date.getDate() === 24;
}

// Actual solution 2
function christmasEve(date) {
  return /Dec 24/.test(date + "");
}
