// Actual Solution
function cipher(s, k) {
  return s.replace(/[a-z]/gi, (m) => {
    console.log("m", m);
    const c = m < "a" ? 65 : 97;
    console.log("c", c);
    return String.fromCharCode(((m.charCodeAt(0) - c + k) % 26) + c);
  });
}

// ASCII CODE FOR A = 65; ASCII CODE FOR a = 97;

console.log(cipher("Back to Square One", 126));
