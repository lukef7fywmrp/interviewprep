const specialReverse = (sentence, letter) => {
  return sentence
    .split(" ")
    .map((w) => (w.startsWith(letter) ? [...w].reverse().join("") : w))
    .join(" ");
};

console.log(
  specialReverse("word searches are super fun", "s"),
  "word sehcraes are repus fun"
);

console.log(
  specialReverse("first man to walk on the moon", "m"),
  "first nam to walk on the noom"
);

console.log(
  specialReverse("peter piper picked pickled peppers", "p"),
  "retep repip dekcip delkcip sreppep"
);

console.log(
  specialReverse("he went to climb mount everest", "p"),
  "he went to climb mount everest"
);
