// singleton
//Object.create

// object literals

//how we can use symbol on objects(interview question)
const mySym = Symbol("Key1")


//object literals
const jsUser= {
    name: "Anshika",
    "full name": "Anshika Pandey",
    [mySym]: "myKey1",
    age: 18,
    location:"Hyd",
    email: "anshikadivya332@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Mon","Sat"]
}

// when we access object by "." and somewhere "[]".
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.email ="divya@google.com" // change email
// Object.freeze(jsUser) // fixed data
jsUser.email ="riya.com"
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());



