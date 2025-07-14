// first method of declaring arrays , arrays can contains different types of data 
const myArr = [0,1,2,3,4,5]
console.log(myArr[0])
const names = ["wardah","amber","malaaikah","haaiqah"]
console.log(names[1])

// 2nd method to declare an array
const firstnames = new Array("wardah","haaiqah","amber") // automatically saves in squae brackets
console.log(firstnames)
console.log(firstnames[1])

//ARRAY METHODS

myArr.push(6) // add value in last of array
console.log(myArr)
myArr.pop() // removes last vlue from array
console.log(myArr)

myArr.unshift(9) // add 9 at the first place of array and shift all values forward
console.log(myArr)

myArr.shift() // shift remves the first value as all values comes backward 1 step so tah first value removes
console.log(myArr)

console.log(myArr.includes(4)) // pooch rahe ke kia 4 is array me presnt hai

console.log(myArr.indexOf(9)) // pooch rahe ke 9th index par kia value hai is array me 9th index nahi hai isliye ye -1 dega
console.log(myArr.indexOf(3)) // INDEX 3 PAR JO VALUE HAI WO DEGA


const newArray = myArr.join() // converts ka array in string 
console.log(newArray, typeof(newArray))

console.log( "original array" ,myArr)
const n1 = myArr.slice(1,3) // inclue 1 and exclude 3rd index
console.log("slice applied results",n1)
console.log("after applying slice original  array results", myArr) // slice does not make change in the original array just only extract the data

const n2 = myArr.splice(1,3) // include both first an dlast index also splice make chnages in the original array
console.log("splice array", n2)
console.log("origial array after applying splice",myArr)