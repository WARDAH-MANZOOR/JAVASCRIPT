// number 
console.log("\n"+ "*********** NUMBERS ************")
console.log("---- SIMPLE NUMBER ----")
const score = 400
console.log(score)
console.log("\n"+ "---- NUMBER IN OBJECT ----")
const newScore = Number(score)
console.log(newScore)
console.log("\n"+ "---- APPLYING TOFIXED ----")
console.log(newScore.toFixed(2)) // put 2 s taht 2 decimal values ,make value fixed just like 99.99090 to 99.99 and 100 to 100.00
console.log("\n"+ "---- APPLYING TOPRECISION ----")
const newScore2 = 123.8890
console.log(newScore2.toPrecision(3)) // yahan humne 3 dia tuye points ke pehle wali values ko fucus karega points  epehle 123 tha tou isne usse roundoff karke 124 kardia , agr yahan 12.779 ye hota tou ye 12.8 deta  kuinke point se pehle 2 values aur point ke baa 1 uthai round of karke total 3 
console.log("\n"+ "---- APPLYING TOLOCALESTRING ----")
const hundreds = 100000000
console.log(hundreds.toLocaleString()) // us standard
console.log(hundreds.toLocaleString('en-PK'))//pakistani standard
console.log(hundreds.toLocaleString('en-IN'))//indian standard

console.log("\n"+ "---- NUMBER TO STRING ----")
const newScoreToString = newScore.toString()
console.log(newScoreToString + typeof newScoreToString)

// now the number becomes string so we can apply string methods on thisjust like length, slice and others
console.log("\n"+ "---- APPLYING STRING METHODS AS NUMBER CONVERTS IN STRING ----")
console.log(newScoreToString.length)
console.log(newScoreToString.charAt(1))
console.log(newScoreToString.replace('4','10'))
console.log(newScoreToString.slice(0,2))


console.log("\n"+ "************ MATHS ************")
console.log("---- SIMPLE MATHS ----")
console.log(Math) // returns object
console.log("\n" + "---- ABSOLUTE VALUE ----")
console.log(Math.abs(-100)) // converts negative values to positive
console.log("\n" + "---- ROUND OFF VALUE ----")
console.log(Math.round(100.8)) // Round off according to standard rules
console.log("\n" + "---- ROUND OFF VALUE WITH CEIL ----")
console.log(Math.ceil(100.2)) // roundoff always to above value e.g there is 100.2  after decimal there is 2 but it rounds off this to 101

console.log("\n" + "---- ROUND OFF VALUE FLOOR  ----")
console.log(Math.floor(100.8)) // roundoff always to lowest value e.g there is 100.8  after decimal there is 8 but it rounds off this to 100

console.log("\n" + "---- MINIMUM VALUE   ----")
console.log(Math.min(4,6,8,1,0,47))
console.log("\n" + "---- MAXIMUM VALUE   ----")
console.log(Math.max(4,6,8,1,0,47))

console.log("\n" + "---- RANDOM VALUE   ----")
console.log(Math.random()) // always gives between 0 and 1  randomly

console.log("\n" + "---- RANDOM VALUE BETWEEN 0-9 ----")
console.log(Math.random()*10) //gives between 0 and 9  randomly

console.log("\n" + "---- RANDOM VALUE BETWEEN 1-10 ----")
console.log((Math.random()*10)+1) // gives between 1 and 10  randomly

console.log("\n" + "---- ROUND OFF RANDOM VALUE BETWEEN 1-10 USING FLOOR  ----")
console.log(Math.floor(Math.random()*10)+1) // roundoff value between 1 and 10  randomly

const min = 10
const max = 20
console.log(Math.floor(((Math.random()*(max-min))+1)+min)) // sme wahi cheezjo ooper ki hai bas yahan max aur min ka concept dal da hai ke hum istarah bhi karsakte hain iske ilawaya is me min ko plus kia hai jo 10 hai tou ye ba 11-20 me dega answer