/* *************
! For Of Loops
- iterate over the values or an interable object(strings and arrays included)
- iterable means to be able to parse through with numbers
- for arrays
************ */
// This does not work because the properties are not 'iterable'
// let student = {
//     name:  'Jake from state farm',
//     awesome: true,
//     degree: "insurance sales",
//     age:98

// };

// for(iten of student){
//     console.log(item);
// }

let soupArray = ['potato', 'brocolli', 'carrot', 'chicken noodle', 'chili'];

for (soup of soupArray) {
    console.log(soup);
}