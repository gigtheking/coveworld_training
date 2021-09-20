const animals = ["dog", "cat", "horse"];
const objAnimals = { name: "dog", skinColor: "dark" };
const animalProps = [
  { name: "dog", skinColor: "dark" },
  { name: "cat", skinColor: "brown" },
  { name: "horse", skinColor: "white" },
];
//console.log(`animals`, animals);

// for loop only arrays;
for (let index = 0; index < animals.length; index++) {
  const element = animals[index];
  //console.log(`element`, element, index);
}

let obje = objAnimals.name;
//console.log(`obje`, obje)
//for in loop is for object
//for (const key of objAnimals) {
// console.log(`result`,objAnimals[key]);}

//for loop
for (let index = 0; index < animalProps.length; index++) {
  const element = animalProps[index].name;
  //console.log(`props`, element, index);
}

//for of for array
for (const iterator of animalProps) {
  //console.log(`iterator`, iterator.name);
}

// looping method of an array

//map
animalProps.map((res, index, array) => {
  //console.log(`value`, res);
});

//forEach

//animalProps.forEach((value) => console.log(`value`, value));

//filter get a specified values
const result = animalProps.filter((value) => {
  let res = value === "dog";
  return res;
});
console.log(`result`, result);

//using destruting to return values
const res = animalProps.filter(({ name }, index) => {
  //console.log(`object`);
  return name === "horse";
});
console.log(`res`, res);
