//Concantenation => Smoosh numbers and/or text together
let third = 1050 + "100";
console.log(third);
console.log(typeof third);

//Addition=> Math
console.log(1050 + 100);

/*
Set 7 (or 8) variables:
    firstName
    lastName
    houseNumber
    aptNumber (if applicable)
    street
    city
    state
    zipcode
    Set each variable to its respective type.
    console.log your whole address (with a space between variables).
*/

let firstName = "Tony";
let lastName = "Stark";
let houseNumber = 1200;
let street = "Industrial Ave.";
let city = "Long Beach";
let state = "CA";
let zipcode = 90803;

console.log(
  firstName +
    " " +
    lastName +
    " " +
    houseNumber +
    " " +
    street +
    " " +
    city +
    ", " +
    state +
    "  " +
    zipcode
);

console.log(firstName + " " + lastName);
console.log(houseNumber + " " + street);
console.log(city + ", " + state + "  " + zipcode);
