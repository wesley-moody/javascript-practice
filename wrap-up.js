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
const createPerson = (name, age, gender) => ({ name, age, gender });

  // return {
  //   name: name,
  //   age: age,
  //   gender: gender
  // };


console.log(createPerson("Zodiac Killer", 56, "male"));

// Write Concise Declarative Functions
const bicycle = {
  gear: 2,
  // setGear: function(newGear) {
    setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
};

bicycle.setGear(3)
console.log(bicycle.gear);

// Use Class Syntax to Define a Constructor Function
class spaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
var zeus = new spaceShuttle('Jupiter');
console.log(zeus.targetPlanet)


function makeClass() {
  class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);

// Use getters and setters to Control Access to an Object
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}

function makeClass() {
  class Thermostat {
    constructor(temp) {
      this._temp = 5/9 * (temp - 32);
    }
    get temperature() {
      return this._temp;
    }
    set temperature(updatedTemp) {
      this._temp = updatedTemp;
    }
  }  
  return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);










