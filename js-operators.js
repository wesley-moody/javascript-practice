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

// // Use the Spread Operator to Evaluate Arrays In-Place
// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;
// (function() {
//   arr2 = [...arr1];
//   arr1[0] = 'potato'
// })();
// console.log(arr2)

// // Use Destructuring Assignment to Assign Variables from Objects
// var voxel = {x: 3.6, y: 7.4, z: 6.54}
// const { x : a, y : b, z : c} = voxel;

// const AVG_TEMPERATURES = {
//   today: 77.5,
//   tomorrow: 79
// };

// function getTempOfTmrw(avgTemperatures) {
//   "use strict";
//   // get tomorrow field from average temperatures object and assign it to the temp of tomorrow variable
//   const  { tomorrow : tempOfTomorrow } = avgTemperatures;
//   return tempOfTomorrow;
// }
// console.log(getTempOfTmrw(AVG_TEMPERATURES));

// // Destructuring Assignment with Nested Objects
// const LOCAL_FORECAST = {
//   today: { min: 72, max: 83 },
//   tomorrow: { min: 73.3, max: 84.6}
// };

// function getMaxOfTmrw(forecast) {
//   "use strict";
//   const { tomorrow: { max : getMaxOfTomorrow }} = forecast;
//   return getMaxOfTomorrow;
// }
// console.log(getMaxOfTmrw(LOCAL_FORECAST));

// // Use Destructuring Assignment to Assign Variables from Arrays
// const [z, x, , y] = [1, 2, 3, 4, 5, 6];
// console.log(z, x, y)

let a = 8, b = 6;
(() => {
  // "use strict";
  [a, b] = [b, a];
})();
console.log(a);
console.log(b);

// Use Destructuring Assignment with the Rest Operator



