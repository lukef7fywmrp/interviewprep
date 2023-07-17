const additivePersistence = (n) => {
  if (n.toString().length === 1) return 0;

  let count = 0;
  while (n.toString().length !== 1) {
    n = n
      .toString()
      .split("")
      .reduce((a, c) => a + +c, 0);
    count++;
  }

  return count;
};

console.log(additivePersistence(5), 0);

console.log(additivePersistence(27), 1);

console.log(additivePersistence(58), 2);

console.log(additivePersistence(5789), 3);
