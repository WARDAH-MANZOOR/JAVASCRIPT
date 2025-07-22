function sayMyName(){
    console.log("W")
    console.log("A")
    console.log("R")
    console.log("D")
    console.log("A")
    console.log("H")
}
sayMyName()

function addTwoNumbers (number1,number2){
    console.log(number1+number2)
}
addTwoNumbers(55,44) // par yahan masla ye hai ke agr user ne kissi aur data tye me dedeia tou ye function check nahi karraha data type buta dd karraha hai uske liye agay jakar if else kis statements lagengi ke agr user int me number de tou number adds hon warna nahi 

// agr function variable me store karden tou wo undefined aaiga kuine wo return nah hua console hoarha hai

const result = addTwoNumbers(4,5) // IT PRINTS 9 AFTER SAVIN IN RESULT VARIABLE
console.log("RESULTS", result) // gives undefined as the value does not save in result becuase i=t doe snot return value it just printing

//  adding return 
function addTwoNumbers (number1,number2){
    return number1+number2
}
const results = addTwoNumbers(3,5)
console.log("RESULTS", results)


function loginUserMessage(username){
    return `${username} just loggedIn`

}
const result1 = loginUserMessage() 
console.log(result1) // gives undefined as we donot paas the username

const result2 = loginUserMessage("wardah") // now corrected as passed the user name in argument
console.log(result2)

// agr humme undefined wale masle se bachna hai ke agr jese user argument nahindeta tu undefined ata hai usse tou hum if else use karenge
function loginUserMessage1(username){
    if(username === undefined){
        console.log("please enter username")
        return // return isliye lagaya ke hum chhate hain ke agr useranme undefined ho toua ga code na chale
    }
    return `${username} just loggedIn`

}
console.log(loginUserMessage1())

// avoiding if else and giving default value in parameter
function loginUserMessage2(username="wardah"){ // ab default value humesha wardah rahegi agrnuser koi value nahi bhi deta tab bhi ye undefined wala issue solve hogaya aur agr user name dega usernme tu wardah ajaiga by default 
    return `${username} just loggedIn`

}
const result3 = loginUserMessage2() // by default username = wardah
console.log(result3)
const result4 = loginUserMessage2("alisha") // user gives user name then this userane overrides by deafult value and gives this vaue
console.log(result4)

// agr kissi number ka pata na ho ke user kitni baar dedega uske liye spread operator jie yahan rest operator kahenge wo use hoga

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(5))
console.log(calculateCartPrice(5,5,6,78,9))

function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(5,5,7,9,0,1,7)) // is function me humne srf num1 return kia hai aur val1 aur val2 bhi parameter me add kia hai , ab ye jo user ne values di hain isme first value val1 ko jigi 2nd value val2 ko aki sari num1 ki hongi kuinek 3rd number par num1 hai aur rest parameter wese bhis abse last me hid eclare hota hai pehe nahi 

 // objects with function
const user = {
    username:"wardah",
    price:230
}
function handleobject(anyObject){
   console.log( `Username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleobject(user) // object name
handleobject({ // objct bhi dalskate hain direct
    username:"Alisha",
    price:450
})

// arrays with function
const newarray= [2,5,7,9,1,0]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(newarray))
console.log(returnSecondValue([2,5,7,9,1,0]))/ by direct putting array
