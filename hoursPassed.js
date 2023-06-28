// function hoursPassed(t1, t2) {
//   if (t1.includes("12:00 AM")) t1 = "0:00 AM";

//   let t1Time = +t1.split(":")[0];
//   let t2Time = +t2.split(":")[0];
//   if (t1.includes("PM")) t1Time += 12;
//   if (t2.includes("PM")) t2Time += 12;

//   const diff = t2Time - t1Time;

//   return diff === 0 ? "No time has passed" : `${diff} hours`;
// }

// Solution
function hoursPassed(t1, t2) {
  t1 = eval(t1.replace(" AM", "").replace(" PM", "+12").replace(":00", ""));
  t2 = eval(t2.replace(" AM", "").replace(" PM", "+12").replace(":00", ""));
  if (t1 == 12) t1 = 0;
  return t1 != t2 ? Math.abs(t1 - t2) + " hours" : "No time has passed.";
}

let [strVector, resVector] = [
  [
    ["3:00 AM", "9:00 AM"],
    ["2:00 PM", "4:00 PM"],
    ["1:00 AM", "3:00 PM"],
    ["2:00 AM", "3:00 PM"],

    ["8:00 AM", "8:00 PM"],
    ["12:00 AM", "10:00 PM"],
    ["1:00 AM", "1:00 AM"],
    ["12:00 PM", "12:00 PM"],
  ],

  [
    "6 hours",
    "2 hours",
    "14 hours",
    "13 hours",
    "12 hours",
    "22 hours",
    "No time has passed.",
    "No time has passed.",
  ],
];

for (let i in strVector)
  console.log(hoursPassed(...strVector[i]), resVector[i]);
