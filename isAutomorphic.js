const isAutomorphic = (n) => (n ** 2).toString().endsWith(n);

console.log(isAutomorphic(0), true);

console.log(isAutomorphic(1), true);

console.log(isAutomorphic(5), true);

console.log(isAutomorphic(6), true);

console.log(isAutomorphic(25), true);

console.log(isAutomorphic(76), true);

console.log(isAutomorphic(7109376), true);

console.log(isAutomorphic(36), false);

console.log(isAutomorphic(100), false);

console.log(isAutomorphic(11), false);

console.log(isAutomorphic(6025), false);

console.log(isAutomorphic(3), false);

console.log(isAutomorphic(1376), false);
