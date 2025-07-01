console.log(" *********** DATES ***********" + "\n")
console.log(" ------- Simple Date -------")
let myDate = new Date()
console.log(myDate) // not readable 
console.log(myDate.getDate())
console.log(myDate.getFullYear())
console.log(myDate.getMonth())
console.log(myDate.getMilliseconds())
console.log(myDate.getHours())

console.log("\n"+" ------- Type of Date -------")
console.log(typeof myDate) // type of date is object

console.log("\n"+" ------- Date using toString -------")
console.log("\n" + myDate.toString()) //coordinated Universal Time
console.log("\n"+" ------- Date using toDateString -------")
console.log("\n" + myDate.toDateString()) // only date and day
console.log("\n"+" ------- Date using toISOString -------")
console.log("\n" + myDate.toISOString()) //ISO String
console.log("\n"+" ------- Date using toLocaleDateString -------")
console.log("\n" + myDate.toLocaleDateString()) // only date
console.log("\n"+" ------- Date using toLocaleString -------")
console.log("\n" + myDate.toLocaleString()) // date and time
console.log(myDate.toLocaleString('default',{
    weekday:"long"
}))
console.log("\n"+" ------- Own created date(only date and day) -------")
let myCreatedDate = new Date(2025,0,7) // year(2025), month(0 means january), date(7)
console.log(myCreatedDate.toDateString())

console.log("\n"+" ------- Own created date(day, date, time) -------")
let myCreatedDate1 = new Date(2025,0,7,5,3) // year(2025), month(0 means january), date(7), hours(5),minutes(3)
console.log(myCreatedDate1.toLocaleString())

console.log("\n"+" ------- Own created date (yy-mm-dd) format (day, date, time) -------")
let myCreatedDate2 = new Date("2025-01-03") // year(2025), month(01 means january), date(3)
console.log(myCreatedDate2.toLocaleString())

console.log("\n"+" ------- Own created date (mm-dd-yy) format (day, date, time) -------")
let myCreatedDate3 = new Date("01-03-2025") // month(01 means january), , date(3), year (2025)
console.log(myCreatedDate3.toLocaleString())
console.log(myCreatedDate3.getTime())
console.log("\n" + " *********** TIME STAMPS ***********" + "\n")
let timeStamp = Date.now() // 1st january 1970
console.log(timeStamp) // in millisecond(these are used for comparison)
console.log(Math.floor(Date.now()/1000)) // in seconds
