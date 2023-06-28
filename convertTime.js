// const convertTime = (time) => {
//   let hour = time.split(":")[0];
//   let minutes = time.split(":")[1];
//   let seconds = time.split(":")[2].substring(0, 2);
//   let period = time.split(":")[2].substring(2);

//   hour = Number(hour);

//   if (period === "PM") hour === 12 ? (hour = 12) : (hour += 12);
//   if (period === "AM") hour === 12 ? (hour = "00") : hour;

//   return `${hour}:${minutes}:${seconds}`;
// };

// Solution
function convertTime(str) {
  let d = new Date("12/17/19 " + str.replace(/(A|P)/, " $1"));

  return [d.getHours(), d.getMinutes(), d.getSeconds()]
    .map((v) => ("" + v).padStart(2, "0"))
    .join(":");
}

console.log(convertTime("07:05:45PM"));
console.log(convertTime("12:40:22AM"));
console.log(convertTime("12:45:54PM"));
console.log(convertTime("05:32:33PM"));
console.log(convertTime("11:59:59PM"));
console.log(convertTime("11:59:59AM"));
console.log(convertTime("06:00:19AM"));


