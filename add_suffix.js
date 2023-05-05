const add_suffix = (suffix) => (word) => word + suffix;

const add_ly = add_suffix('ly');
const add_less = add_suffix('less');
const add_ing = add_suffix('ing');

console.log(add_ly('hopeless'));
console.log(add_ly('total'));

console.log(add_less('fear'));
console.log(add_less('ruth'));

console.log(add_ing('cheer'));
console.log(add_ing('book'));
