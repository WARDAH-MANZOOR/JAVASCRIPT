// literal objects
const mySym = "mySymbol" // symbol
const jsUser = {
    name:"wardah",
    age: 21,
    "city": "karachi",
    [mySym]: "mySymbol",// for defining symbols in object we use square brackets if we dont use brackets then symbol is considered as string not as symbol
    email: "wardahmanzoor@gmail.com",
    isLoggedIn: false,
    lastLginDays: ["Monday","Saturday"]
}

console.log(jsUser.email) // not a good method
console.log(jsUser["email"]) // istarah extract karne ke liye data hum string me rakhte hian key because ye object me as a string hi treat horahi hai
console.log(jsUser[mySym]) // symbol ko print karneka tareeka 
console.log(jsUser.age)