// function tempConversion(celcius) {
//   let fahrenheit = Number(((celcius * 9) / 5 + 32).toFixed(2));
//   let kelvin = Number((celcius + 273.15).toFixed(2));

//   return kelvin < 0 ? "Invalid" : [fahrenheit, kelvin];
// }

// Actual Solution
function tempConversion(celcius) {
  let result = [
    +((celcius * 9) / 5 + 32).toFixed(2),
    +(celcius + 273.15).toFixed(2),
  ];

  return result[1] < 0 ? "Invalid" : result;
}

console.log(tempConversion(0));
console.log(tempConversion(100));
console.log(tempConversion(42.8));
console.log(tempConversion(300.4));
console.log(tempConversion(-10.7));
console.log(tempConversion(-273.13));
console.log(tempConversion(-273.16));
