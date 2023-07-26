// function plant(s, w, f, t) {
//   if (t < 20 || t > 30) {
//     return "-".repeat(w * w) + s;
//   }

//   let str = "";
//   for (let i = 0; i < w; i++) {
//     str += "-".repeat(w) + s.repeat(f);
//   }

//   return str;
// }

// Solution
const plant = (seed, water, fert, temp) => {
  return temp < 20 || temp > 30
    ? "-".repeat(water ** 2) + seed
    : ("-".repeat(water) + seed.repeat(fert)).repeat(water);
};

console.log(plant("@", 3, 3, 25), "---@@@---@@@---@@@", "Example #1");

console.log(plant("#", 1, 5, 30), "-#####", "Example #2");

console.log(
  plant("§", 5, 1, 20),
  "-----§-----§-----§-----§-----§",
  "Example #3"
);

console.log(plant("&", 3, 3, 15), "---------&", "Example #4");

console.log(plant("🍁", 2, 6, 28), "--🍁🍁🍁🍁🍁🍁--🍁🍁🍁🍁🍁🍁");

console.log(plant("🍃", 4, 2, 22), "----🍃🍃----🍃🍃----🍃🍃----🍃🍃");

console.log(plant("€", 4, 10, 38), "----------------€");
