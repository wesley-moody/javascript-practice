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

console.log(longestWord("Where in the world is Carmen San Diego?"))
console.log(longestWord("Three time fantasy football MSFF champion!"))

