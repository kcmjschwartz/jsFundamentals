let x = 12;

function scopeOne() {
   let x = 33;
    // console.log(x);
}

scopeOne();
// console.log(x);


let y = 12;
function scopeTwo() {
    y = 33; //reassigning value of y if let is not present
    console.log(y);
}

console.log(y); // will go with the initial value of y
scopeTwo();// will give the value of y in the function
console.log(y);// will give the values of y after the function

//order matters!
