// Singleton constructor objects
// declaring empty object
const tinderUser = new Object()
console.log(tinderUser)

// another way to declare
const tinderUser1 = {}
console.log(tinderUser1)

// now assigning values to empty object

tinderUser1.id = "123abc"
tinderUser1.name = "Wardah"
tinderUser1.isLoggedIn = false

console.log(tinderUser1)

// objects in objects
const user = {
    email:"wardah@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Wardah",
            lastName:"Manzoor"
        }
    }
}

console.log(user.fullName)
console.log(user.fullName.userFullName)
console.log(user.fullName.userFullName.firstName)

// adding objects in objects

const obj1 = {a:1,b:1}
const obj2 = {c:1,d:1}
const obj3 = {obj1,obj2}
console.log(obj3) // isne objects ke andar objects dedia par humme tou aik hi object banana object me object dal kar

 // Adding bjects using "assign" method 

const obj4 = Object.assign(obj1, obj2) // isse bhi objects add hojainge par agr hum aik empty barcket pehle lagain tou ziada behtar hai 
console.log(obj4)
const obj5 = Object.assign({}, obj1, obj2) // adding empty brackets for more better results

// empty object add karne se ye horaha ke sari va;lues empty bject me save honi agr hum empty object nahi denge tou sari values obj1 matlab ke pehle object me jakars ave hngiisse kuch hoga tou anhi par ziada behtar hai ke empty object me values save ki jain 

console.log(obj5)

// adding objects using "Spread" method
const obj6 = { ...obj1, ...obj2}
console.log(obj6)

//objects in arrays

const obj = [
    {
        id:1,
        name:"wardah"
    
    },
    {
        id:2,
        name:"alisha"
    }
]
console.log(obj[0]) // first object
console.log(obj[0].name) // first ooject name

// fetching keys in array
console.log(Object.keys(tinderUser1))
// fetching values in array
console.log(Object.values(tinderUser1))
// fetching entries it results objects in arrays by which we know first item is key and another is value
console.log(Object.entries(tinderUser1))

// for checking property exists or not 

console.log(tinderUser1.hasOwnProperty("isLoggedIn"))