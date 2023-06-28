// const vowels = ["A", "E", "I", "O", "U"];

// const getConsonantsSurname = (surname) => {
//   let consonants;
//   if (surname.length >= 3) {
//     consonants = surname
//       .toUpperCase()
//       .split("")
//       .filter((c) => !vowels.includes(c));

//     if (consonants.length < 3) {
//       consonants.push(...surname.split("").filter((c) => vowels.includes(c)));
//     }

//     return consonants.slice(0, 3);
//   } else {
//     consonants = surname
//       .toUpperCase()
//       .split("")
//       .filter((c) => !vowels.includes(c));

//     consonants.push(...surname.split("").filter((c) => vowels.includes(c)));

//     consonants.push("X");
//   }

//   return consonants;
// };

// const getConsonantsName = (name) => {
//   let consonants;
//   if (name.length >= 3) {
//     consonants = name
//       .toUpperCase()
//       .split("")
//       .filter((c) => !vowels.includes(c));

//     if (consonants.length === 3) {
//       return consonants;
//     }
//     if (consonants.length > 3) {
//       //   FIXME: Remove index 1 from consonants
//       consonants.filter((c) => c);
//     }

//     if (consonants.length < 3) {
//       consonants.push(...name.split("").filter((c) => vowels.includes(c)));
//     }

//     return consonants.slice(0, 3);
//   } else {
//     consonants = name
//       .toUpperCase()
//       .split("")
//       .filter((c) => !vowels.includes(c));

//     consonants.push(...name.split("").filter((c) => vowels.includes(c)));

//     consonants.push("X");
//   }

//   return consonants;
// };

// function fiscalCode(person) {
//   const { name, surname, gender, dob } = person;

//   let cSurname = getConsonantsSurname(surname).join("");
//   let cName = getConsonantsName(name).join("");

//   let day = +dob.split("/")[0];

//   return (
//     cSurname +
//     cName +
//     dob.split("/")[2].slice(2, 4) +
//     "A" +
//     (gender === "F"
//       ? (day + 40).toString()
//       : day < 10
//       ? "0" + day
//       : day.toString())
//   );
// }

// Solution
function fiscalCode(person) {
  const months = " ABCDEHLMPRST";
  const getV = (s) => s.toUpperCase().replace(/[^AEIOU]/g, "");
  const getC = (s) => s.toUpperCase().replace(/[AEIOU]/g, "");
  const code = (s) => (getC(s) + getV(s) + "XXX").slice(0, 3);
  const [d, m, y] = person.dob.split("/");

  let sCode = code(person.surname);
  let fCon = getC(person.name);
  let fCode = fCon.length > 3 ? fCon[0] + fCon[2] + fCon[3] : code(person.name);
  let nCode =
    y.slice(-2) +
    months[m] +
    (person.gender === "M" ? ("0" + d).slice(-2) : +d + 40);
  return sCode + fCode + nCode;
}

console.log(
  fiscalCode({
    name: "Brendan",
    surname: "Eich",
    gender: "M",
    dob: "1/12/1961",
  }),
  "CHEBND61T01"
);

console.log(
  fiscalCode({ name: "Helen", surname: "Yu", gender: "F", dob: "1/12/1950" }),
  "YUXHLN50T41"
);

console.log(
  fiscalCode({ name: "Al", surname: "Capone", gender: "M", dob: "17/1/1899" }),
  "CPNLAX99A17"
);

console.log(
  fiscalCode({
    name: "Mickey",
    surname: "Mouse",
    gender: "M",
    dob: "16/1/1928",
  }),
  "MSOMKY28A16"
);

console.log(
  fiscalCode({
    name: "Marie",
    surname: "Curie",
    gender: "F",
    dob: "7/11/1867",
  }),
  "CRUMRA67S47"
);
