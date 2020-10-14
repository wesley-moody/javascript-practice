// Use Arrow functions to Write Concise Anonymous Functions
// var magic = function() {
//   return new Date();
// };

// var magic = () => {
//   return new Date();
// }

// var magic = () => new Date();

// const magic = () => new Date();

//Write Arrow Functions with Parameters
var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5]))

// Step one: remove 'fuction' key word
// Step two: insert the arrow after params
// Step three: remove curley braces and 'return' keyword
// Step four: for good measure, change 'var' to 'const'
// const myConcat = (arr1, arr2) =>  arr1.concat(arr2);
// console.log(myConcat([1, 2], [3, 4, 5]));

// // Write Higher Order Arrow Functions
// const realNumArr = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

// const squareList = (arr) => {
//   // filter the list above looking for positive integers
//   // then for each positive integer find the squared value
//   const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
//   return squaredIntegers;
// };

// const squaredIntegers = squareList(realNumArr);
// console.log(squaredIntegers);

// // Write Higher Order Arrow Functions
// const increment = (function() {
//   return function increment(number, value = 1) {
//     return number + value;
//   };
// })();
// console.log(increment(5, 2));
// console.log(increment(5));

// // Use the Rest Operator with Function Parameters
// const sum = (function() {
//   return function sum(x, y, z) {
//     const args = [x, y, z];
//     return args.reduce((a, b) => a + b, 0);
//   };
// })();
// console.log(sum(1, 2, 3, 4));

// const sums = (function() {
//   return function sum(...args) {

//     return args.reduce((a, b) => a + b, 0);
//   };
// })();
// console.log(sums(1, 2, 3, 4, 22));

// Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  arr2 = [...arr1];
  arr1[0] = 'potato'
})();
console.log(arr2)

// Use Destructuring Assignment to Assign Variables from Objects
var voxel = {x: 3.6, y: 7.4, z: 6.54}
const { x : a, y : b, z : c} = voxel;

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // get tomorrow field from average temperatures object and assign it to the temp of tomorrow variable
  const  { tomorrow : tempOfTomorrow } = avgTemperatures;
  return tempOfTomorrow;
}
console.log(getTempOfTmrw(AVG_TEMPERATURES));

// Destructuring Assignment with Nested Objects
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6}
};

function getMaxOfTmrw(forecast) {
  "use strict";
  const { tomorrow: { max : getMaxOfTomorrow }} = forecast;
  return getMaxOfTomorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST));

// Use Destructuring Assignment to Assign Variables from Arrays






