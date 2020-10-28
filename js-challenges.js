// Return longest word in string
function longestWord (str) {
    let words = str.split(" ");
    let longestWord = '';

  for(let word of words) {
    if(word.length > longestWord.length)
      longestWord = word;
  }
    console.log(longestWord)
    return longestWord;
}

// console.log(longestWord("Where in the world is Carmen San Diego?"))
// console.log(longestWord("Three time fantasy football MSFF champion!"))

//Arithmetic, Geometric, or No pattern
// no negative numbers
function mathSequences(arr) {
  let arith = new Set();
  let geo = new Set();

  for (let i = 1; i < arr.length; i++) {
    let number1 = arr[i] -arr [i - 1];
    arith.add(number1);
    let number2 = arr[i] / arr[i -1];
    geo.add(number2);    
  }
  if (arith.size === 1) {
    return "Arithmetic"
  }
  if (geo.size === 1) {
    return "Geometric"
  }
  return -1;
}

console.log(mathSequences([10, 20, 30, 40]));
// "Arithmetic"
console.log(mathSequences([2, 4, 8, 16]));
// "Geometric"
console.log(mathSequences([2, 5, 14, 89]));
// -1

// Longest Words Challenges
function longestWords(str) {
  let words = str.split(' ')
  let size = 0;
  let max = [''];

  for (let i = 0; i < words.length; i++) {
    if(words[i].length >= size) {
      size = words[i].length;
      if(max[max.length - 1].length < words[i].length) {
        max = [];
        max.push(words[i])
      } else {
        max = [...max, words[i]];
      }
    }
  }
  return [...max];
}

// console.log(longestWords("Where in the world is Carmen San Diego?"))
// console.log(longestWords("Three time fantasy football MSFF champion!"))

// Capitalize First Letter in String
function capitalizeWords(str) {
  let words = str.split(" ").map(word => {
    // let firstLetter = word.slice(0, 1);
    // let remainder = word.slice(1);
    // firstLetter = firstLetter.toUpperCase();
    // // console.log(firstLetter, remainder);
    // return `${firstLetter}${remainder}`
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  // console.log(words);

  return words.join(" ")
}

console.log(capitalizeWords("Where in the world is Carmen San Diego?"))
console.log(capitalizeWords("Three time fantasy football MSFF champion!"))