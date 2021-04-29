//Variable names


// Var vs Let

/*
    Introduced in ES6, we have 3 keywords for variables:
        - var 
        - let
        - const
    
    var & let: operate the same but behave differently
    const: cannot be reexpressed.  (*Constant*)

        - var is scoped to the nearest function block
        - let is scoped to the nearest enclosing block


*/

//* Var

var x = 12;

function varTest() {   //function block 
    var x = 33;
    if(1 == 1) { //enclosing block
        var x = 45;
        console.log(x); //logs 45
        }
        console.log(x); //logs 45
}

varTest();
console.log(x); // logs 12



// Switch to  var to let




var z = 12;

function letTest() {//function block
    let z = 33;
    if(1 == 1) {//enclosing block
        let z = 45;
        console.log(z); // logs 45
        }
        console.log(z); //logs 33
}

letTest();
console.log(z);// logs 12


//* Const

function constTest() { //function block
    const scope = 1;
    // scope = 3;
    if (true){ //enclosing block
        const scope = 2;
        console.log(scope);//logs 2
    }
    console.log(scope);//logs 1
}

constTest();




