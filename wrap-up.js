// Template Literals
const person = {
  name: "Zodiac Killer",
  age: 56,
  job: 'to kill'
};

const greeting = `Hello, my name is ${person.name}! I am ${person.age} years old and I'm going  ${person.job} you!`;

console.log(greeting)

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
  const resultDisplayArray = [];
  for (let i = 0; i < arr.length; i++) {
    resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
  }
  return resultDisplayArray;
}
const resultDisplayArray = makeList(result.failure);
resultDisplayArray

// Write Concise Object Literal Declarations Using Simple Fields





