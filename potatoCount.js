const potatoCount = (str) => {
  var arr = str.split("potato");

  return arr.length - 1;
};

console.log(potatoCount("potatosspotatocherry"));
