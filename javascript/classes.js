// class function
// function Animal(name, color, legs) {
//   this.name = name;
//   this.color = color;
//   this.legs = legs;
// }

// Animal.prototype.listAnimal = function () {
//   let list = `${this.name} ${this.color} ${this.legs}`;
//   return list;
// };
// const animals = [];
// Animal.prototype.storage = function () {
//   let newAnimals = { name: this.name, color: this.color, legs: this.legs };
//   animals.push(newAnimals);

//   return animals;
// };

// // let result = new Animals();
// // const allAnimal = (name, color, legs) => {
// //   let res = `
// //     ${(result.name = name)},
// //     ${(result.color = color)},
// //     ${(result.legs = legs)},
// //     `;
// //   return res;
// // };

// console.log(`allAnimal`, allAnimal("horse", "blue", 4));
// console.log(`storage`, result.storage());
// console.log(`allAnimal`, allAnimal("cat", "white", 4));
// console.log(`storage`, result.storage());
// console.log(`result`, result.listAnimal());

// let obj = {
//   name: "",
// };

//Users
//user 1
//user 2

// function Humans(name, color, legs, hands) {
//   Animal.call(this, name, color, legs);
//   this.hands = hands;
// }

// Humans.prototype = Object.create(Animal.prototype);
// //
// const human = new Humans("gideon", "fair", 2, 2);
// console.log(`human.`, human.storage());
// console.log(`human`, human);

class Animal {
  constructor(name, color, leg) {
    (this.name = name), (this.color = color), (this.leg = leg);
  }
  print() {
    console.log(`animal`, this);
  }
}
const animalOne = new Animal("cat", "black", 4);
console.log(`animalOne`, animalOne);
