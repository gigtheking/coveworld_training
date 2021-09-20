//conditional
const name = "gideon";

//syntax
let person = {
    name = name,
    height: 1.3,
};

if (name === "gideon") {
  console.log(`true`, true);
} else {
  console.log(`person`, person);
}

let res =
    name === "gideon"
    ? console.log(`res`, person)

//if (num == num2) return console.log(`true`, true)

switch (name) {
  case "gideon":
    console.log(`switch`, person);
    break;

  default:
    break;
}
