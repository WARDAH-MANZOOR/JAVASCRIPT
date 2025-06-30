// CONST 

const accountId = 12345 // const is used forconstant which we cant change 
// accountId = 2 //not allowed as it is contant value we cannot change it 

// LET
// let is used for declaring variable, always use let for declaring a variable (Preferable)
let accountEmail = "wardah@gmail.com"
accountEmail = "wardah123@gmail.com" // updating the accountEmail as it is not constant

// VAR 
// Donot use var for declaring variable as it becomes issue in functional scope and global sope in lengthy projects means if tehre is password variable which i assign with var then if we change it in 1 place it changes everywhere by using var which is not correct as we want to change it at only one place

var accountPassword = "wardah123"
accountPassword = "wardah@12" // changing accountPassowrd as it is not constant


// Directly declare variable without using any keyword
// not a preferable way donot do this
accountCity = "karachi"
accountCity = "Lahore" //changing the accountCity as it is not constant

// Declaring variabe without assigning value
// if we did not assign value in declared variable it becomes undefined 

let accountState;

console.log(accountId) // for printing 1 variable

console.log([accountId,accountEmail,accountPassword,accountCity,accountState]) // for printing multiple variable using console.log

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) // for printing multiple varaibles in table using console.table