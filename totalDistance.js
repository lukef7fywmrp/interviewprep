function totalDistance(h, l, t) {
  return +((t / h) * l + t).toFixed(1);
}

console.log(totalDistance(0.2, 0.4, 100.0), 300.0);

console.log(totalDistance(0.12, 0.1, 10.0), 18.3);

console.log(totalDistance(0.5, 0.5, 25.0), 50.0);

console.log(totalDistance(0.1, 0.1, 6.0), 12.0);

console.log(totalDistance(0.05, 0.1, 1.1), 3.3);

console.log(totalDistance(1.0, 1.0, 777.0), 1554.0);

console.log(totalDistance(0.2, 0.1, 100.6), 150.9);
