function inBox(arr) {
  return arr.some((x) => [...x].includes("*", 1));
}

console.log(inBox(["###", "# #", "###"]), false);

console.log(inBox(["####", "#  #", "#  #", "####"]), false);

console.log(inBox(["#####", "#   #", "#   #", "#   #", "#####"]), false);

console.log(inBox(["###", "#*#", "###"]), true);

console.log(inBox(["####", "# *#", "#  #", "####"]), true);

console.log(inBox(["#####", "#  *#", "#   #", "#   #", "#####"]), true);

console.log(inBox(["#####", "#   #", "# * #", "#   #", "#####"]), true);

console.log(inBox(["#####", "#   #", "#   #", "# * #", "#####"]), true);

console.log(inBox(["#####", "#*  #", "#   #", "#   #", "#####"]), true);
