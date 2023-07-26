const avgSpeed = (upTime, upSpd, downSpd) => {
  let dist = (upTime * upSpd) / 60;
  let totalDist = 2 * dist;
  let downTime = (dist / downSpd) * 60;
  let totalTime = downTime + upTime;
  return (totalDist / totalTime) * 60;
};

console.log(avgSpeed(18, 10, 30));
console.log(avgSpeed(18, 20, 60));
console.log(avgSpeed(30, 10, 30));
console.log(avgSpeed(30, 8, 24));
