// scoping => scoping is determing where variables, functons and object are accessed
//types of scoping
//global -> is where variable are placed at the top level of the document and is accessible at all time
// block -> is when varable are not accessible outside the block or statement

//hoising =>
const globalVariable = "i am accessible from everywhere";
let num = 2 + 2;
if (num === 4) {
  const blockVariable = num * 2;
  // console.log(`globalVariable`, globalVariable);
  // console.log(`currNumValue`, blockVariable);
  // return console.log(`true`, true);
}
//console.log(`outside blockVariable`, blockVariable);
//console.log(`out globalVariable`, globalVariable);

// es5 ways of declaring a function name
//function declaretion
function names() {
  const name = "gideon";
  //console.log(`name`, name);
}

//called the function
names();

// ways to declare a function

//function declaration
//function assignment
// explicit return
const nameFunc = function num() {
  const calc = 2 + 2;
  return calc;
};

const result = nameFunc();
//console.log(`nameFunc`, result);

//es6 function arrow function

//implisit return
const animals = () => 2 + 2;
console.log(`animals()`, animals);

//adding a function value by reference
const nameOfPerson = (num, aName) => {
  console.log(`aName`, aName, num);
};
nameOfPerson(4, ["name", "obi", "ada", "olu"]);
