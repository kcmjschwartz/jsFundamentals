/* *****
    ! For In Loops
    -great for iterating over values in an object
    -Properties in objects are what's call enumerable
    -enumerable just means 'countable
    -for objects
    *****/


    let student = {
        name:  'Jake from state farm',
        awesome: true,
        degree: "insurance sales",
        age:98

    };


// log key
    for(item in student){
        console.log(item);

    };

//log key and value

    for(item in student){
        console.log(item);
        console.log(student[item]);
        
    };

