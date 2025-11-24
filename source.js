/*

Build an All-True Property Validator
In this lab, we test a specific property of each object in an array to see if it always has a truthy value or not.

For example, one could be asked to test one property of the objects in an array like the following:

[{
    name: "Quincy",
    role: "Founder",
    isBot: false
}, {
    name: "Naomi",
    role: "",
    isBot: false
}, {
    name: "Camperbot",
    role: "Bot",
    isBot: true
}]
If you were asked to test the name property, in the objects of this array the property name has the values of "Quincy", "Naomi", and "Camperbot", so it is always truthy.

If you were asked to test the role property, the values are "Founder", "", and "Bot", in this case "" is a falsy value, so the values are not always truthy.


User Stories:

1. We should have a function named `truthCheck`.
2. The `truthCheck` function takes two arguments: an array of objects and a string representing a property name found in those objects.
3. The function should check if the property with the name equal to the second argument has a truthy value in all the objects of the array, and return true if it has, and false otherwise.

*/

const truthCheck = (anArrayOfObjects, propertyName) => {
  let propertyArray = anArrayOfObjects.map((obj) => obj[propertyName]);
  for (let item of propertyArray) if (!item) return false;
  return true;
};


// Tests
let myObjs = [
  { name: "Quincy", role: "Founder", isBot: false },
  { name: "Naomi", role: "", isBot: false },
  { name: "Camperbot", role: "Bot", isBot: true },
];
console.log(truthCheck(myObjs, "isBot")); // should return false

myObjs = [
  { name: "Quincy", role: "Founder", isBot: false },
  { name: "Naomi", role: "", isBot: false },
  { name: "Camperbot", role: "Bot", isBot: true },
];
console.log(truthCheck(myObjs, "name")); // should return true


myObjs = [
  { name: "Quincy", role: "Founder", isBot: false },
  { name: "Naomi", role: "", isBot: false },
  { name: "Camperbot", role: "Bot", isBot: true },
];
console.log(truthCheck(myObjs, "role")); // should return false

myObjs = [
  { name: "Pikachu", number: 25, caught: 3 },
  { name: "Togepi", number: 175, caught: 1 },
];
console.log(truthCheck(myObjs, "number")); // should return true

myObjs = [
  { name: "Pikachu", number: 25, caught: 3 },
  { name: "Togepi", number: 175, caught: 1 },
  { name: "MissingNo", number: NaN, caught: 0 },
];
console.log(truthCheck(myObjs, "caught")); // should return false
console.log(truthCheck(myObjs, "number")); // should return false

myObjs = [
  { name: "Quincy", username: "QuincyLarson" },
  { name: "Naomi", username: "nhcarrigan" },
  { name: "Camperbot" },
];
console.log(truthCheck(myObjs, "username")); // should return false


myObjs = [
  { name: "freeCodeCamp", users: [{ name: "Quincy" }, { name: "Naomi" }] },
  { name: "Code Radio", users: [{ name: "Camperbot" }] },
  { name: "", users: [] },
];
console.log(truthCheck(myObjs, "users")); // should return true

myObjs = [
  { id: 1, data: { url: "https://freecodecamp.org", name: "freeCodeCamp" } },
  {
    id: 2,
    data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" },
  },
  { id: null, data: {} },
];
console.log(truthCheck(myObjs, "data")); // should return true
console.log(truthCheck(myObjs, "id")); // should return false


