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

// Passing Values to Functions with Arguments
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5)











