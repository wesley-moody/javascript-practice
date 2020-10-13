// Iterate Using For Loops
var ourArray = [];

for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

var myArray = [];

for (var i = 1; i < 6; i ++) {
  myArray.push(i);
}

myArray

// Iterate Odd Numbers with a For Loop
var evenArray = [];
for (var i = 0; i < 20; i += 2) {
  evenArray.push(i);
}
evenArray

var oddArray = [];
for (var i = 1; i < 20; i += 2) {
  oddArray.push(i);
}
oddArray

// Count Backwards with a For Loop
var evenBackwardsArray = [];

for (var i = 20; i > 0; i -= 2) {
  evenBackwardsArray.push(i);
}
evenBackwardsArray

oddBackwardsArray = []
for (var i = 20; i > 0; i -= 2) {
  oddBackwardsArray.push(i);
}
oddBackwardsArray

// Iterate Through an Array with a For Loop
// Find the sum of items in existing array
var ourArr = [ 9, 10, 11, 12 ];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

ourTotal

var smallArr = [ 2, 3, 4, 5, 6, 7 ];
var smallArrTotal = 0

for (var i = 0; i < smallArr.length; i++) {
  smallArrTotal += smallArr[i];
}
console.log(smallArrTotal, ourTotal)

// Nesting For Loops
function multiplyAll(arr) {
  var product = 1;

  for(var i = 0; i < arr.length; i++) { // first level == 3 evaluates number of items in outer arr
    for(var j = 0; j < arr[i].length; j++) { // 2nd level == 2,2,3 evals each inner arr
      product *= arr[i][j]
    } 
  }
  return product;
}
var product = multiplyAll([[1,2],[3,4],[5,6,7]]);

product

// Iterate with Do... While Loops
var myArray = [];
var i = 10;

do {
  myArray.push(i);
  i++;
} while (i < 5)

console.log(i, myArray)





