function error(n) {
  return (
    {
      1: "Check the fan: e1",
      2: "Emergency stop: e2",
      3: "Pump Error: e3",
      4: "c: e4",
      5: "Temperature Sensor Error: e5",
    }[n] || 101
  );
}

console.log(error(1));
console.log(error(2));
console.log(error(3));
console.log(error(4));
console.log(error(5));
console.log(error(-1000));
