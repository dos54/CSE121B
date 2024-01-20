let a = 3;
let b = 4;
let c = 7;

// Add two numbers
console.log(a + b);
// Multiply two numbers
console.log(a * b);
// Subtract one from a number
console.log(b - a);
// concatinate two strings together.
console.log("a" + "b");
// assign a value to a variable
let z = 1;
// increment the value in a variable by 3
console.log(z += 3);
// compare two values to see if they are the same
console.log((a + b) == c);
// check to see if one number is less than another number
console.log(a < b);
// Check to see if two values are NOT equal
console.log(a != b);
// check to see if a value is less than 10 and greater than 0
console.log(0 < a < 10);

const section = document.createElement('section');
const h3 = document.createElement('h3');
const output = document.createElement('p')
document.body.appendChild(section);
section.appendChild(h3);
section.appendChild(output);

h3.textContent = 'Relief Society';
output.textContent = `Variable z: ${z += 24}`;
