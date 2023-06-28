const isTrue = (relation) => eval(relation.replace("=", "==="));

console.log(isTrue("8<7"), false);

console.log(isTrue("15>4"), true);

console.log(isTrue("6>6"), false);

console.log(isTrue("10<10"), false);

console.log(isTrue("10<9"), false);

console.log(isTrue("5>6"), false);

console.log(isTrue("2=2"), true);

console.log(isTrue("5=13"), false);

console.log(isTrue("15=137"), false);

console.log(isTrue("101=101"), true);
