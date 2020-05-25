console.log("HelloWorld");

//primitive types
let num = 12;
let string = "myString";
let boolean = true;

// Whenever you create a variable with non-primitive type (primitive types are strings, numbers and booleans) 
// the variable isn't storing the data of the complex type but instead a pointer to a location in memory where that 
// information is held. Because of this, when you assign another variable by setting it equal to an object, the two 
// variables will be pointing at the same memory location which means a change in one of the variables will be reflected in the other.

// let myArr = [1, 2, 3];
// let myArrCopy = myArr;
// myArrCopy.push(4);
// console.log(myArr);         // Outputs [1, 2, 3, 4]
// console.log(myArrCopy);     // Outputs [1, 2, 3, 4]


// // Dereferencing = 

// let myArr = [1, 2, 3];
// let myArrCopy = [];
// for (let i = 0; i < myArray.length; i++) {
//     const myArrCopy.push(4); = array[i];
    
// }

// console.log(myArr);
// console.log(myArrCopy);

// Dereferencing Object
// let myObj = {
//     a: "A",
//     b: "B",
// };
// let myObjCopy = {
//     a: myObj.a,
//     b: myObj.b,
// }




// Spread Syntax '...' is the spread operator
let myArr = [1, 2, 3];
let myArrCopy = [... myArr]
myArrCopy.push(4);
console.log(myArr);
console.log(myArrCopy)

let myObj = {
    a: "A",
    b: "B",
};
let myObjCopy = {...myObj};
myObjCopy.c = "C";
console.log(myObj);         
console.log(myObjCopy);

// destructuring
const {a, c} = myObjCopy;
console.log(a);                 // output A
console.log(c);                 // output C
console.log(myObjCopy)          // output { a: 'A', b: 'B', c: 'C' }       