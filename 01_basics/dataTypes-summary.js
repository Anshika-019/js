//  Primitive
//7 types: String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue =100.3

const isLoggedIn =false
const outsideTemp =null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

const bigNumber = 3455566666667777777666555n



// Reference Type (non primitive)

// Array, Objects, Functions

const heros = ["doga", "neeraj","raj"]
let myObj = {
    name: "doga",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof outsideTemp);



//***************************************************************************/

// Stack (Primitive), Heap (non-Primitive)

let myYoutubeName ="AnshikaPandey"

let anotherName = myYoutubeName
anotherName = "Divya Pandey"

console.log(myYoutubeName);
console.log(anotherName);

let user1 ={
    email: "user@google.com",
    upi: "user@ybl"
}

let user2 = user1
user2.email = "anshikadivya@gmail.com"

console.log(user1.email);
console.log(user2.email);