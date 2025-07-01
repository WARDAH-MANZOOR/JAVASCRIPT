//  Primitive
// call by value(does not give actual refrence when we copy it gives copy of that and we make changes in that copy not in actual reference)

const { captureOwnerStack } = require("react")

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// number
const score = 100
const scoreValue = 100.3

// string 
let name = "wardah"

// boolean
const isLoggedIn = false

// null
const outsideTemp = null

// undefined
let userEmail;

// symbol
const id = Symbol('123') // symbol make things unique 
const anotherId = Symbol('123')
console.log(id === anotherId); // both variables are unique so when we compare it we get false 
console.log(typeof anotherId); // symbol(type of symbol)
// bigInt
const bigNumber = 3456543576654356754n  
console.log(typeof bigNumber) // bigInt (type of bigInt)



// Reference (Non primitive)
// call by refrence, directly changes the reference donot make copy of it

// Array, Objects, Functions

// arrays
const heros = ["shaktiman", "naagraj", "doga"];
console.log(typeof heros); // object (type of array)
// objects
let myObj = {
    name: "hitesh",
    age: 22,
}
console.log(typeof myObj); // object (type of object)

// function stored in variable
const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof myFunction); // function (type of function)


// staticType and DynamicType langauge:

// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

// For example, in JavaScript, you can do the following:

// let x = 10; // x is now a number
// x = "Hello"; // x is now a string
// x = true; // x is now a boolean
// On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

// Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

// int x = 10; // x is a variable of type int
// String name = "John"; // name is a variable of type String
// JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.


// MEMORY 
// TWO TYPW OF MEMORY(STACK AND HEAP)
// STACK USED FOR PRIMITIVE DATATYPES
// HEAP USES FOR NON PRIMITIVE DATATYPES

// STACK(PRIMITIVE) ---- CALL BY VALUE

let myName = "Alisha"
let newName = myName // myName now equals to newName(but it is not actual reference it is a copy of myName in newName which become equal means it does not make any change in actaual refrence of myName becuase it is premitive data type(stack))
newName = "Wardah" // now newName changes to Wardah
console.log(myName)  // myname remains same as becuase becuase it is actual reference so it gives "Alisha"
console.log(newName) // newName changes as we make change in it so it gives "Wardah"

// HEAP(NON PRIMITIVE) ---- CALL BY REFERENCE
let userOne = {
    email:"alisha@gmail.com",
    contact:12345
}
let userTwo = userOne // now userTwo becomes equal to userOne it is non primitive that's why it gives actual refrence not copy
userTwo.email = "wardah@gmail.com" // now userTwo changes userTwo and userOne are equa because it gives actaul refernce in non prmintive so make changes in both the userOne and userTwo
console.log(userTwo) // becomes "wardah@gmail.com"
console.log(userOne) // becomes "wardah@gmail.com"