// a = 7;
// b = a;
// j = "Quokka is cool";

// console.log(a);
// console.log(b);
// console.log(j);

// var a = 9;

// // Initialize variables
// var a = 5;
// var b = 10;
// var c = "I am a";

// a = a + 1;
// b = b + 5;
// c = c + " String!";
// // console.log(a, b, c);

// var sum = 10 + 10;
// console.log(sum);

// var difference = 45 - 33;
// console.log(difference);

// var product = 8 * 10;
// console.log(product);

// var quotient = 64 / 8;
// console.log(quotient);

// var myVar = 87;
// var myVarMin = 11;
// // increment
// myVar = myVar + 1;
// // decrement
// myVarMin = myVarMin - 1;
// // above is the same as:
// myVar++;
// myVarMin--;
// console.log(myVar);
// console.log(myVarMin);

// var ourDecimal = 5.7;

// var myDecimal = 0.009;

// var product = 2.0 * 2.5;
// console.log(product);

// var quotient = 4.4 / 2.0;
// console.log(quotient);

// var remainder;

// remainder = 11 % 3;
// console.log(remainder);
// // modulo operator often used to determine if number is even or odd.
// // if you can divide the number by 2 that means the number is even, if not it's odd

// // COMPOUND ASSIGNMENT with AUGMENTED ADDITION
// var a = 3;
// var b = 17;
// var c = 12;

// a += 12;
// b += 9;
// c += 7;
// console.log(a, b, c);

// // COMPOUND ASSIGNMENT with AUGMENTED  SUBTRACTION
// var a = 11;
// var b = 9;
// var c = 3;

// a -= 6;
// b -= 15;
// c -= 1;
// console.log(a, b, c);

// // COMPOUND ASSIGNMENT with AUGMENTED MULTIPLICATION
// var a = 5;
// var b = 12;
// var c = 4.6;

// a *= 5;
// b *= 3;
// c *= 10;
// console.log(a, b, c);

// // COMPOUND ASSIGNMENT with AUGMENTED DIVISION
// var a = 48;
// var b = 108;
// var c = 33;

// a /= 12;
// b /= 4;
// c /= 11;
// console.log(a, b, c);

// // DECLARE STRING VARIABLES
// // string literals
// var firstName = "Alan";
// var lastName = "Turing";

// var myFirstName = "Wes";
// var myLastName = "Moody";

// // ESCAPING LITERAL QUOTES in STRINGS
// var myStr = 'I am a "double quoted" string inside "double quotes"';
// console.log(myStr);

// // QUOTING STRINGS with SINGLE QUOTES
// var myStr = 'Where in the world is "Carmen San Diego"?';
// console.log(myStr);

// // ESCAPE SEQUENCES in Strings
// var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
// console.log(myStr);

// // Concatinate Strings with + Operator
// var ourStr = "I come first. " + "I come second.";
// var myStr = "This is the start. " + "This is the end.";
// console.log(ourStr);
// console.log(myStr);

// // Concatinate Strings with += Operator
// var ourStr = "I come first. ";
// ourStr += "I come second.";

// var myStr = "This is the first sentence. ";
// myStr += "This is the second sentence.";

// console.log(ourStr);
// console.log(myStr);

// // Constructing strings with variables
// var ourName = "freeCodeCamp";
// var ourStr = "Hello, our name is " + ourName + ", how are you?";

// var myName = "Wes";
// var myStr = "My name is " + myName + ", I'm well, thanks!";

// console.log(ourStr);
// console.log(myStr);

// // Appending Variables to Strings
// var anAdjective = "awesome!";
// var ourStr = "freeCodeCamp is ";
// ourStr += anAdjective;

// console.log(ourStr);

// // Find length of a string
// var firstName = "Wesley";
// firstNameLength = firstName.length;
// console.log(firstNameLength);

// var lastName = "Moody";
// lastNameLength = lastName.length;
// console.log(lastNameLength);

// // Bracket Notation to Find First Character in String
// // zero based indexing
// var firstLetterOfFirstName = "";
// var firstName = "Wes";
// firstLetterOfFirstName = firstName[0];
// console.log(firstLetterOfFirstName);

// var firstLetterOfLastName = "";
// var lastName = "Moody";
// firstLetterOfLastName = lastName[0];
// console.log(firstLetterOfLastName);

// // String Immutability
// var myStr = "Jello World"
// myStr[0] = "H"; // This does not work b/c strings are immutable
// console.log(myStr)

// myStr = "Hello World"
// console.log(myStr)
// // Just b/c strings can't be altered doesn't mean they can't be changed entirely/ replaced by a new string

// // Bracket Notation to Get any Character Position in a String

// var firstName = "Wes"
// var lastLetterOfFirstname = firstName[firstName.length - 1];
// // Length = full length of the string, which is 3. if I asked for index 3 or [3] I'd get undefined b/c nothing is present at index 3 or [3]. Length - 1 gives the last index of any string no matter how long the string is.
// console.log(lastLetterOfFirstname)

// // Bracket Notation to Find Nth-to-Last Char in String
// var firstName = "Wes"
// var secondToLastLetterOfFirstname = firstName[firstName.length - 2];
// console.log(secondToLastLetterOfFirstname)

// //Word Blanks
// function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
//   var result = "";
//   result += "The " + myAdjective + " " + myNoun + " " + " " + myVerb + " to the store " + myAdverb
//   return result
// }

// console.log(wordBlanks("dog", "big", "ran", "quickly"))
// console.log(wordBlanks('turd', 'smelly', 'plopped', 'moistly'))

// // Store Multiple Values with Arrays
// var ourArray = ["John", 23];
// var myArray = ['Quincy', 1]

// // Nested Arrays
// var ourArray = [['the universe', 42], ['Jackie', 'Robinson', 42]];
// var myArray = [["Bulls", "MJ", 23], ['Dodgers', 'Jackie', 42]];

// // Access Array Data w/ Indexes
// var ourArray = [50,60,70];
// var ourData = [0]; // equals 50

// var myArray = [50,60,70];
// var myData = myArray[0];
// console.log(myData)

// // Modify Array Data With Indexes
// var ourArray = [18,64,99];
// ourArray[1] = 45 // ourArray now equals [18,45,99]

// var myArray = [18,64,99];
// myArray[0] = 45
// console.log(myArray)

// // Access Multi=Dimensional Arrays with Indexes
// var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]]
// var myData = myArray[2][1];
// console.log(myData)

// // Manipulate Arrays with push()
// var ourArray = ["Stimpson", 'J', 'cat'];
// ourArray.push(['happy', 'joy'])
// console.log(ourArray)

// var myArray = [['john', 23], ['cat', 2]];
// myArray.push(['dog', 3]);
// console.log(myArray);

// // Manipulate Arrays w/ pop()
// var ourArray = [1,2,3];
// var removedFromOurArray = ourArray.pop();
// console.log(ourArray)

// var myArray = ['Derrick Thomas', 'Len Dawson', 'Patrick Mahomes', 'Tony Gonzalez', 'Jamaal Charles', 'Dustin Colquitt']
// console.log(myArray)
// var removedFromMyArray = myArray.pop();
// console.log(myArray)

// // Manipulate Arrays with shift()
// var ourArray = ['Stimpson', 'J', ['cat']];
// var removedFromOurArray = ourArray.shift();
// console.log(ourArray)

// var myArray = [["John, 23"], ['dog', 3]];
// var removedFromMyArray = myArray.shift()
// console.log(myArray)

// //Manipulate Arrays with unshift()
// var ourArray = ['Stimpson', 'J', 'cat'];
// ourArray.shift(); // ourArray now equals ['J', 'cat']
// ourArray.unshift('Happy');
// console.log(ourArray)

// // Shopping List --or-- Array of Arrays
// var myList = [['cereal', 3], ['milk', 2], ['bananas', 3], ['juice', 2], ['eggs', 12]]

// // Write Reusable Code with Functions
// function ourReusableFunction() {
//   console.log('Heyya, World');
// }

// ourReusableFunction();

// function reusableFunction() {
//   console.log("Hi World");
// }

// reusableFunction

//  //Passing Values to Functions with Arguments
// function ourFunctionWithArgs(a, b) {
//   console.log(a - b);
// }
// ourFunctionWithArgs(10, 5)

// function functionWithArgs(a, b) {
//   console.log(a + b);
// }
// functionWithArgs(10, 5)

// // Global Scope and Functions
// var myGlobal = 10;

// function fun1() {
//   oopsGlobal = 5;
// }

// function fun2() {
//   var output = '';
//   if (typeof myGlobal != undefined) {
//     output += 'myGlobal: ' + oopsGlobal;
//   }
//   if (typeof oopsGlobal != 'undefined') {
//     output += ' oopsglobal: ' + oopsGlobal;
//   }
//   console.log(output);
// }
// fun1();
// fun2()

// // Local Scope and Functions
// function myLocalScope() {
//   var myVar = 5;
//   console.log(myVar);
// }
// myLocalScope();

// // Global vs. Local Scope in Functions
// var outerWear = 'T-Shirt';

// function myOutfit() {
//   var outerWear = 'sweater'

//   return outerWear;
// }

// console.log(myOutfit());
// // access local variable by invoking the function
// console.log(outerWear)
// // access global variable by calling it by name outside the function

// // Return a Value from a Function with Return
// function minusSeven(num) {
//   return num - 7;
// }
// console.log(minusSeven(10))

// function timesFive(num) {
//   return num * 5;
// }
// console.log(timesFive(5))

// // Understanding Undefined Value Returned from a Function
// var sum = 0;
// function addThree() {
//   sum = sum + 3;
// }

// function addFive() {
//   sum = sum + 5
//   // -- or --
//   sum += 5
// }

// // Assignment with a Returned Value
// var changed = 0;

// function change(num) {
//   return (num + 5) / 3;
// }

// changed = change(10);

// var processed = 0;

// function processedArg(num) {
//   return (num + 3) / 5;
// }

// console.log(processedArg(7))

// // Stand in Line
// function nextInLine(arr, item) {
//   arr.push(item)
//   return arr.shift();
// }

// var testArr = [1,2,3,4,5];

// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log('After: ' + JSON.stringify(testArr));

// // Boolean Values
// function welcomeToBooleans() {
//   return true;
// }

// // Use Conditional Logic with If Statements
// function ourTrueOrFalse(isItTrue) {
//   if (isItTrue) {
//     return "Yes, it's true";
//   }
//   return "No, it's false";
// }
// function trueOrFalse(wasThatTrue) {
//   if (wasThatTrue) {
//     return "Yes, that was true";
//   }
//   return "No, that was false";
// }

// console.log(trueOrFalse(true));

// // Comparison with the Equality Operator
// function testEqual(val) {
//   if (val == 12) {
//     return "Equal";
//   }
//   return "Not Equal";
// }
// console.log(testEqual(10));

// // Comparison with the Strict Equality Operator
// function testgStrict(val) {
//   if (val === 8) {
//     return "Equal";
//   }
//   return "Not Equal";
// }

// console.log(testgStrict(10));

// // Practice Comparing Different Values
// function comparEquality(a, b) {
//   if (a == b) {
//     return "Equal";
//   }
//   return "Not Equal";
// }

// console.log(comparEquality(10, "10"))

// // Comparison with the Inequality Operator
// function testNotEqual(val) {
//   if (val != 99) {
//     return "Not Equal";
//   }
//   return "Equal";
// }
// console.log(testNotEqual(10))

// // Comparison with the Strict Inequality operator
// function testStrictNotEqual(val) {
//   if (val !== 17) {
//     return "Not Equal";
//   }
//   return "Equal"
// }
// console.log(testStrictNotEqual(10))

// // Comparisons with the Logical And Operator
// function testGreaterThan(val) {
//   if (val > 100) {
//     return "Over 100";
//   }
//   if (val > 10) {
//     return "Over 10"
//   }
//   return "10 or Under"
// }

// console.log(testGreaterThan(10))

// // Comparison with the Greater Than or Equal To Operator
// function testGreaterOrEqual(val) {
//   if(val >= 20) {
//     return "20 or over";
//   }
//   if (val >= 10) {
//     return "10 or over";
//   }
//   return "Less than 10";
// }

// console.log(testGreaterOrEqual(10))

// // Else Statements
// function testElse(val) {
//   var result = "";
//   if (val > 5) {
//     result = "Bigger than 5";
//   } else {
//     result = "5 or smaller"
//   }
// return result;
// }

// console.log(testElse(4))

// // Else If Statements
// function testElseIf(val) {
//   if (val > 10) {
//     return "Greater than 10";
//   } else if (val < 5) {
//     return "Smaller than 5";
//   } else {
//     return "Between 5 and 10"
//   }
// }

// console.log(testElseIf(7));

// Logical Order in If Else Statements
// function orderMyLogic(val) {
//   if (val < 5) {
//     return "Less than 5"
//   } else if (val < 10) {
//     return "Less than 10";
//   } else {
//     return "Greater than or equal to 10"
//   }
  
// }

// console.log(orderMyLogic(4));
// console.log(orderMyLogic(7));
// console.log(orderMyLogic(19));

// // Chaining If/ Else if statements
// function testSize(num) {
//   if (num < 5) {
//     return "Tiny"
//   } else if (num < 10) {
//     return "Small"
//   } else if (num < 15) {
//     return "Medium"
//   } else if (num < 20) {
//     return "Large"
//   } else {
//     return "Huge"
//   }
// }

// console.log(testSize(4))
// console.log(testSize(7))
// console.log(testSize(12))
// console.log(testSize(19))
// console.log(testSize(44))

// // Golf Code
// var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "You're drunk, go home"]
// function golfScore(par, strokes) {
//   if (strokes == 1) {
//     return names[0]
//   } else if (strokes <= par - 2) {
//     return names[1]
//   } else if (strokes == par - 1) {
//     return names[2] 
//   } else if (strokes == par) {
//     return names[3] 
//   } else if (strokes == par + 1) {
//     return names[4] 
//   } else if (strokes == par + 2) {
//     return names[5] 
//   } else {
//     return names[6]
//   }
// }

// console.log(golfScore(5, 5))

// // Switch Statements
// function caseInSwitch(val) {
//   var answer = "";
//   switch(val) {
//     case 1:  
//       answer = "alpha";
//       break;
//     case 2:
//       answer = "beta";
//       break
//     case 3:
//       answer = "gamma"
//       break
//     case 4:
//       answer = "delta"
//       break;
//   }
//   return answer
// }
// console.log(caseInSwitch(1));
// console.log(caseInSwitch(2));
// console.log(caseInSwitch(3));
// console.log(caseInSwitch(4));

// // Default Option in Switch Statements
// function switchOfStuff(val) {
//   var answer = "";
//   switch (val) {
//     case "a":
//       answer = "apple";
//       break;
//     case "b":
//       answer = "bird";
//       break;  
//     case "c":
//       answer = "cat";
//       break;
//     default:
//       answer = "stuff";
//       break
//   }
//     return answer
// }

// console.log(switchOfStuff(13))

// // Multiple identical Options in Switch Statements
// function sequentialSizes(val) {
//   var answer = "";
//   switch(val) {
//     case 1:
//     case 2:
//     case 3:
//       answer = "Low"
//       break;
//     case 4:
//     case 5:
//     case 6:
//       answer = "Middle"
//       break;
//     case 7:
//     case 8:
//     case 9:
//       answer = "High"
//       break;
//     default:
//       answer = "Go home, you're drunk";
//       break;
//   }
//   return answer; 
// }

// console.log(sequentialSizes(33))

// // Replacing If Else Chains with Switch
// function chainToSwitch(val) {
//   var answer = "";
//   switch(val) {
//     case "bob":
//       answer = "Marley";
//       break
//     case 42:
//       answer = "Jackie Robinson";      
//       break;
//     case 1:
//       answer = "There is no #1";
//       break;
//     case 99:
//       answer = "Just a bit outside!";
//       break;
//     case 7:
//       answer = "Ate Nine"
//       break;
//     default:
//       answer = "You're killing me, Smalls!";
//       break;
//   }
//   return answer;
// }
// console.log(chainToSwitch(99))

// // Returning Boolean Values from Functions
// function isLess(a, b) {
//   return a < b;
//   // if (a < b) {
//   //   return true;
//   // } else {
//   //   return false
//   // }
// }

// console.log(isLess(22, 4))

// // Returning Early Pattern from Functions
// function abTest(a, b) {
//   if (a , 0 || b < 0) {
//     return undefined
//   }
//   return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// }

// console.log(abTest(-2, 2))

// Counting Cards
var count = 0
function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count --;
      break;
  }
  var holdbet = 'Hold'
  if (count > 0) {
    holdbet = 'Bet'
  }

  return count + " " + holdbet;
}
cc(2); cc(3); cc(4); cc('K'); cc('A');
console.log(cc(3))

// Build JS Objects
var ourDog = {
  "name": "Paige",
  "legs": 3,
  "tails": 2,
  "friends": []
}

// Accessing Object Properties with Dot Notation
var testObj = {
  "hat": "ballcap",
  "shirt": 'jersey',
  'shoes': 'cleats'
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
console.log(hatValue, shirtValue)

// Accessing Object Properties with Bracket Notation
var testObj = {
  "an entree": "hamburger",
  "my side": 'fries',
  'the drink': 'water'
};
var entreeValue = testObj["an entree"];
var drinkValue = testObj['the drink'];
console.log(entreeValue, drinkValue)

// Accessing Object Properties with Variables
var testObj = {
  12: 'Namath',
  16: 'Montana',
  19: 'Dawson'
};
var playerNumber = 19;
var player = testObj[playerNumber]
console.log(player)

// Updating Object Properties
var ourDog = {
  'name': 'Paige',
  'legs': 4,
  'tails': 1,
  'friends': ["All of them!"]
};
ourDog.name = "Satchell Paige"
console.log(ourDog.name)
console.log(ourDog.friends)

// Add New Properties to an Object
var ourDog = {
  'name': 'Paige',
  'legs': 4,
  'tails': 1,
  'friends': ["All of them!"]
};
ourDog.bark = 'boof!';
console.log(ourDog)

var myDog = {
  'name': 'Paige',
  'legs': 4,
  'tails': 1,
  'friends': ["All of them!"]
};

myDog['bark'] = 'woof woof'
myDog

// Delete Properties From an Object
var ourDog = {
  'name': 'Paige',
  'legs': 4,
  'tails': 1,
  'friends': ["All of them!"],
  'bark': 'boof!'
};
ourDog
delete ourDog.bark;
ourDog

// Using Objects for Lookups
function phoneticlookup(val) {
  var result = "";

  var lookup = {
    "alpha": "Adams",
    'bravo': 'Boston',
    'charlie': 'Chicago',
    'delta': 'Denver',
    'echo': 'Easy',
    'foxtrot': 'Frank',  
  };
  result = lookup[val];
  return result;
}
console.log(phoneticlookup('charlie'))

// Testing Objects for Properties
var myObj = {
  gift: 'pony',
  pet: 'kitten',
  bed: 'sleigh'
};

function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "You Play Ball Like a Girl"
  }  
}

console.log(checkObj(''))


let athletes = {
  0: "Russell Westbrook",
  1: 'Warren Moon',
  2: 'Derick Jeter',
  3: 'Babe Ruth',
  4: 'Alex Gordon',
  5: 'George Brett',
  6: "Bill Russell",
  7: 'Michael Bishop',
  8: 'Troy Aikman',
  9: "Ted Williams",
  10: 'Trent Green',
  11: "Eli Manning",
  12: 'Tom Brady',
  13: "Kurt Warner",
  14: "Pete Rose",
  15: 'Patrick Mahomes',
  16: 'Len Dawson',
  17: "Dizzy Dean",
  18: 'Peyton Manning',
  19: 'Johnny Unitas',
  20: "Barry Sanders",
  21: "Tim Duncan",
  22: 'Emmit Smith',
  23: 'Michael Jordan',
  24: 'Kobe Bryant',
  25: 'Jamaal Charles',
  26: 'Eddie George',
  27: 'Larry Johnson',
  28: "Marshall Faulk",
  29: 'Satchel Paige',
  30: 'Nolan Ryan',
  31: 'Reggie Miller',
  32: 'Magic Johnson',
  33: 'Kareem Abdul-Jabar',
  34: 'Shaq',
  35: 'Kevin Durant',
  36: 'Jerome Bettis',
  37: "Joe Delaney",
  38: 'Curt Schilling',
  39: 'Larry Csonka',
  40: 'Gale Sayers',
  41: 'Dirk Nowitzki',
  42: 'Jackie Robinson',
  43: 'Richard Petty',
  44: 'Hank Aaron',
  45: 'Pedro Martinez',
  46: 'Andy Pettitte',
  47: "Tom Glavine",
  48: 'Jimmie Johnson',
  49: 'Daniel Sorensen',
  50: 'Justin Houston',
  51: "Randy Johnson",
  52: 'Ray Lewis',
  53: "Don Drysdale",
  54: 'Brian Urlacher',
  55: 'Frank Clark',
  56: 'Derrick Johnson',
  57: "Clay Matthews",
  58: 'Derrick Thomas',
  59: "Jack Ham",
  60: "Otto Graham",
  61: 'Tim Grunhard',
  62: 'Casey Wiegman',
  63: 'Willie Lanier',
  64: "Jerry Kramer",
  65: "Ryan Lilja",
  66: "Mario Lemieux",
  67: "Reggie McKenzie",
  68: 'Will Shields',
  69: 'Jared Allen',
  70: "Sam Huff",
  71: 'Mitchell Schwartz',
  72: 'Eric Fisher',
  73: "John Hannah",
  74: "Merlin Olsen",
  75: "Mean Joe Greene",  
  76: "Marion Motley",
  77: 'Willie Roaf',
  78: 'Bobby Bell',
  79: 'Dave Szott',
  80: 'Jerry Rice',
  81: 'Terrell Owens',
  82: 'Dante Hall',
  83: "Andre Reed",
  84: 'Randy Moss',
  85: "Mark Boerigter",
  86: "Buck Buchanan",
  87: 'Travis Kelce',
  88: 'Tony Gonzalez',
  89: "Otis Taylor",
  90: 'Neil Smith',
  91: 'Dennis Rodman',
  92: 'Reggie White',
  93: "Dwight Freeney",
  94: "Charles Haley",
  95: 'Chris Jones',
  96: "Cortez Kennedy",
  97: "Kurt Busch",
  98: "Tony Siragusa",
  99: 'Wayne Gretzki'
}
function numLookup(num) {
  if(athletes.hasOwnProperty(num)) {
    return athletes[num];
  } else {
    return "Nobody ever wore that number"
  }
}
console.log(numLookup(38))


