// ------------ CONVERSION ------------ //
console.log(" ************* CONVERSION *************")

//Number
console.log(" ---- Number ----")
let score = 33
console.log(typeof score)

// convert string(NUMBER) to Number
console.log(" ---- string(Number) to Number ----")
let score1 = "33"
console.log(typeof score1)
let scoreInNumber = Number(score1)
console.log(typeof scoreInNumber)
console.log(scoreInNumber) // gives 33 not "33" as it converts in number 

// string to number 
console.log(" ---- string to Number ----")
let scores = "Wardah"
console.log(typeof scores) // string
let converScoresInNumber = Number(scores)
console.log(typeof converScoresInNumber) // converts in number 
console.log(converScoresInNumber) // gives Nan(Not a number) because its is string , string does not convert in number

// string to number but it is nt fully string or not fully number it si the combination of both
console.log(" ---- Combinations string and Numbers to Number ----")
let score2 = "33abc"
console.log(typeof score2) // string
let converScore2InNumber = Number(score2)
console.log(typeof converScore2InNumber) // converts in number 
console.log(converScore2InNumber) // gives Nan(Not a number) because its is the combination of number and string which is said the type of string and string cannot be change in number


// null(object) to number
console.log(" ---- null to Number ----")
let score3 = null
console.log(typeof score3) // object
let converScore3InNumber = Number(score3)
console.log(typeof converScore3InNumber) // converts in number 
console.log(converScore3InNumber) // gives 0 because it is null so when null converts in number it gives 0

// undefined to number
console.log(" ---- undefined to Number ----")
let score4 = undefined
console.log(typeof score4) // undefined
let converScore4InNumber = Number(score4)
console.log(typeof converScore4InNumber) // converts in number 
console.log(converScore4InNumber) // gives Nan because it is undefined 

// boolean to number
console.log(" ---- boolean to Number ----")
let score5 = true
console.log(typeof score5) // boolean
let converScore5InNumber = Number(score5)
console.log(typeof converScore5InNumber) // converts in number 
console.log(converScore5InNumber) // gives 1 because true =1 and false =0

// number to boolean
console.log(" ---- Number to boolean ----")
let score6 = 1
console.log(typeof score6) // number
let converScore6InNumber = Boolean(score6)
console.log(typeof converScore6InNumber) // converts in boolean 
console.log(converScore6InNumber) // gives true because true =1 and false =0


// empty String to boolean
console.log(" ---- empty string to boolean ----")
let score7 = ""
console.log(typeof score7) // string
let converScore7InNumber = Boolean(score7)
console.log(typeof converScore7InNumber) // converts in boolean 
console.log(converScore7InNumber) // gives false because empty string

//  String to boolean
console.log(" ---- String to boolean ----")
let score8 = "Wardah"
console.log(typeof score8) // string
let converScore8InNumber = Boolean(score8)
console.log(typeof converScore8InNumber) // converts in boolean 
console.log(converScore8InNumber) // gives true because string

//  Number to String
console.log(" ---- Number to String ----")
let score9 = 22
console.log(typeof score9) // number
let converScore9InNumber = String(score9)
console.log(typeof converScore9InNumber) // converts in string 
console.log(converScore9InNumber) // gives string

// ------------ OPERATIONS ------------ //

console.log(" ************* OPERATIONS *************")

// positive value in negative
console.log(" ---- positive value in negative ----")
let value = 3
let negativeValue = -value
console.log(negativeValue)

// addition
console.log(" ---- addition ----")
console.log(2+2)
// subtraction
console.log(" ---- subtraction ----")
console.log(2-2)
// multiplication
console.log(" ---- multiplication ----")
console.log(2*2)
// division
console.log(" ---- division ----")
console.log(2/2)
// power
console.log(" ---- power ----")
console.log(2**3)
// remainder
console.log(" ---- remainder ----")
console.log(2%2)

// string + string
console.log(" ---- string + string ----")
let str1 = "Wardah"
let str2 = "Manzoor"
console.log(str1 + str2)

// string(number) + number
console.log(" ---- string(number) + number ----")
console.log("1"+2) //12

// number + string(number)
console.log(" ---- number + string(number) ----")
console.log(1+"2") //12

// string(number) + string(number)
console.log(" ---- string(number) + string(number) ----")
console.log("1"+"2") //12

// number + string(number)+ string(number)
console.log(" ---- number + string(number)+ string(number) ----")
console.log(1+2+"3") //33

// BODMAS
console.log(" ---- BODMAS WITHOUT BRACKETS ----")
console.log(3+3*8/3) // not crrect thing use barnckets todefines whta things t calculate first
console.log(" ---- BODMAS WITH BRACKETS ----")
console.log(3+3*(8/3)) // correct way as we that first bracket solve then othe roperations according to BODMAS

//BOOLEAN
console.log(" ---- Bolean operations ----")
console.log(true)
console.log(+true)//1  not recommmended
console.log(+"") //0  not recommmended

// assigning same value in multiple variable(NOT RECOMMENDED)
let num1,num2,num3 
num1=num2=num3 =2+2

// increment(NOT RECOMMENDED)
console.log(" ---- increment ----")
let gameCounter = 100
gameCounter++
console.log(gameCounter)

// decrement(NOT RECOMMENDED)
console.log(" ---- decrement ----")
let gameCounter1 = 100
gameCounter1--
console.log(gameCounter1)


// postfix and prefix increment 
console.log(" ---- postfix and prefix increment ----")
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
