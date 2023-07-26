class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(other) {
    if (other.age > this.age) {
      return `${other.name} is older than me`;
    } else if (other.age < this.age) {
      return `${other.name} is younger than me`;
    } else {
      return `${other.name} is the same age as me`;
    }
  }
}

const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 36);
const p3 = new Person("Lily", 24);

p1.compareAge(p2); // "Joel is older than me."
p2.compareAge(p1); // "Samuel is younger than me."
p1.compareAge(p3); // "Lily is the same age as me."

// Actual Solution 2
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   compareAge(other) {
//     let i = Math.sign(other.age - this.age),
//       x = ["the same age as", "older than"][i] || "younger than";

//     return `${other.name} is ${x} me.`;
//   }
// }

// const p1 = new Person("Samuel", 24);
// const p2 = new Person("Joel", 36);
// const p3 = new Person("Lily", 24);

console.log(p1.compareAge(p2));
console.log(p2.compareAge(p1));
console.log(p1.compareAge(p3));
