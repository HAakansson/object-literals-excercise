// Vi vill skapa info om en person. Till exempel namn, ålder, kön osv.
let name = "Niklas";
let age = 30;
let gender = "Male";

let name1 = "Maria";
let age1 = 28;
let gender1 = "Female";

// Istället för att skapa massa enskilda variabler för olika personer, så kan vi klumpa ihop de variablerna som hör ihop till ett och samma objekt.

let niklas = {
  name: "Niklas",
  age: 30,
  gender: "Male",
};

let maria = {
  name: "Maria",
  age: 28,
  gender: "Female",
};

console.log(niklas, maria)
