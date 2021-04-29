/*
Passes through code twice
        First Pass - looks at variables and structure.  Stores our variables declarations (essentially says, "hey, i know a variable of x is defined, so let me store that in my memory so I know it's there"), but does not assign them their values.
             - anything that needs to be hoisted, is hoisted.

        Second Pass - looks for the values.  Assigns the values to our variables and executes an hoisted source code.
*/

//console.log(myName);
let myName = 'Eric';
// console.log(randomVariable);
// does not work because code runs from top to bottom.

b();

function b() {
    console.log("I have been hoisted");
};

//This works because function b is stored in the first pass.