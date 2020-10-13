/ // Use the Conditional (Ternary) Operator
// function checkEqual(a, b) {
//   if(a === b) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkEqual(1, 2));

// function checkEqual(a, b) {
//   return a === b ? true : false;
// }
// console.log(checkEqual(1, 2))

// Multiple Ternery Operators
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
console.log(checkSign(0))

var catName = "Solo";
var quote;

// Var vs Let keywords
var catName = "Beau";
function catTalk() {
  'use strict'; // catches common coding mistakes like setting a variable without declaring with var, let, or const

  catName = "Oliver";
  quote = catName + " says Meow!";
}
console.log(catTalk());

// Mutate an Array Declared with const
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // s = [2, 5, 7];
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
console.log(s);

// Prevent Object Mutation using Object.freeze()
function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };

Object.freeze(MATH_CONSTANTS)

  try {
    MATH_CONSTANTS.PI = 99;    
  } catch( ex ) {
    console.log(ex);    
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI)