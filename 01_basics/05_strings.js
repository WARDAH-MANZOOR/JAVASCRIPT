// simple strings concatenation(Not Recommended)
console.log("--------- string concatenation --------")
const firstName = "Wardah"
const lastName = " Manzoor"
console.log("string concatenation = " + firstName + lastName) // old
console.log("strings length concatenation = " + firstName.length + lastName.length + "\n") // old method

// backlash (REcommended)
console.log("---------- backlash method ---------")
console.log("string concatenation using backlash = " +`my first name is ${firstName} and my last name is ${lastName}`)
console.log("string length using backlash = " + `my first name length is ${firstName.length} and my last name length is ${lastName.length}`+ "\n")

// another method for string using object and constructor
console.log("---------- defining string using object and constructor ---------")
const fullName = new String("Wardah Manzoor")
console.log(fullName)
console.log(fullName[0]) // checking on 0 index which character
console.log(fullName.length)
console.log(fullName.toUpperCase())
console.log(fullName.charAt(2)) // on 2 index which character present
console.log(fullName.indexOf('h')) // h present on which index
const newString = fullName.substring(3,8) // 3 included 8 excluded
console.log(newString) 
const newString1 = fullName.slice(-13,8) // -13(right t left count) the  take characters from -13 index to 7 as 8 character is excluded
// slice and substringa nd same but in slice weput negative values also
console.log(newString1) 
const name1 = "   Alisha    "
console.log(name1)
console.log(name1.trim()) // trim all whitespaces from start and end
console.log(name1.trimStart()) // trim white spaces from start
console.log(name1.trimEnd()) // trim white spaces from end

const url = "https://localhost:3001/login%20/merchant"
console.log(url)
console.log(url.replace('%20','-')) // only replace first ocured
console.log(url.includes("merchant")) //poch rahe hain kia url ke variable me merchant araha hai

const splitString = "Quaid-E-Azam"
console.log(splitString.split('-')) // split on the basis of - and saves the results in array