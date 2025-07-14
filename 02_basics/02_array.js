const marvel_heros = ["thor","ironMan", "spiderMan"]
const dc_heros = ["superMan","flash","spiderMan"]

marvel_heros.push(dc_heros) // the issue is this we add the dc heros array in marvel heros array but stores in arvel horos as array and we want elemts like array means one array not aray in array , bu push it saves aray in array and we extract this array as myArr[0][1] this is not a wrte way to add array in array
console.log(marvel_heros)

//better way to array arrays use concat
const all_heros = marvel_heros.concat(dc_heros) // by concat it array elemts of arrays saves in array as elements not array  in array
console.log(all_heros) 

// spread (use for spreading arrays) and also conncat the arrays 
const spread_heros = [...marvel_heros,...dc_heros]
console.log(spread_heros)


// flat method 
const flatArray = [0,1,2,[3,4],[5,6,7],2,4,5,[2,3,4,[4,9,8]]] // is array ke andar bahut sare arrays hain inko aik hi array anane ke liye hum flat ka method use kate hian 
console.log(flatArray.flat(Infinity)) // yahan infinity isliye diya kuinke hum depth nahi batan achhate thay ke array me kis dept tak ka data ai hi array e dalo humme depth agr pata na h tou nfinity dete hain ke wo khud h dkeh le aur sare elemets ko aik hi array me dalde 

// "from" method
// convert any data type in array 
console.log(Array.isArray("wardah")) // ye array nahi hia humne is Array karke pata kia 

// ab isko array me convert karenge
console.log(Array.from("wardah"))
console.log(Array.from({name:"wardah"})) // gives empty array as it does not convert object in array , if we want then we should define keys and values separately

// "of" method (add multiple values in array)
let score1 = 100
let score2 = 101
let score3 = 200
console.log(Array.of(score1,score2,score3))