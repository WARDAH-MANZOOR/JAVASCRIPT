// simple comparisons with same data types
console.log("---- comparison with same data types ----")
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

// comparisons with the different data types
console.log("---- comparison with different data types ----")
console.log("2" > 1);
console.log("02" > 1);

// comparing 'null'wrong comparisons as sometimes it converts null in 0 and then compare and sometime it converts null in Nan and the compare
console.log("---- comparing null with 0 ----")
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// comparing 'undefined 'wrong comparisons 
console.log("---- comparing undefined with 0 ----")
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === (strict comparison it includes data types checking also in triple euqals)
console.log(" ---- strict compariosn ----")
console.log("2" === 2);