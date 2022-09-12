//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function parseArray(arr){

    let msg='';
    //First item in list - no comma
    if(arr.length > 0)
        msg += parseValue(arr[0])
    //middle items in list - has comma
    for(let i=1; i<arr.length-1; i++){
        msg += ", " + parseValue(arr[i])
    }
    //last item in list - has 'and'
    if(arr.length>1)
        msg += ` and ${parseValue(arr[arr.length-1])}`

    return msg;
}

function parseObject(obj){
    keys = Object.keys(obj);
    let msg='';
    //First item in list - no comma
    if(keys.length > 0)
        msg += `${obj[keys[0]]} from ${keys[0]}`
    //middle items in list - has comma
    for(let i=1; i<keys.length-1; i++){
        msg += `, ${obj[keys[i]]} from ${keys[i]}`
    }
    //last item in list - has comma and 'and'
    if(keys.length>1)
        msg += `, and ${obj[keys[keys.length-1]]} from ${keys[keys.length-1]}`

    return msg;
}

function parseValue(val){
    //Handle Arrays
    if(Array.isArray(val))
        return parseArray(val);
    //Handle Objects
    else if(typeof val == "object" && val != null)
        return parseObject(val)
    //Handle strings and anything else
    else
        return val;
}

function parsePerson(person){
    categories = Object.keys(person);
    for(let i=0; i < categories.length; i++){
        category = categories[i];
        value = person[category]
        let msg = `For ${category} I like `;
        msg += parseValue(value);
        console.log(msg);
    }
    
} 
parsePerson(person3);

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person(name, age){
    this.name = name;
    this.age = age;

    this.printInfo = ()=>{ console.log(`${this.name}, ${this.age}`); }

    this.ageOneYear = ()=>{ this.age++; }

    this.addAge = (years)=>{ this.age += years; }
}

let john = new Person('John Doe', 45);
let dawn = new Person('Dawn Joe', 30);

john.printInfo();
dawn.printInfo();
dawn.ageOneYear();
dawn.ageOneYear();
dawn.ageOneYear();
dawn.printInfo();
john.addAge(3);
john.printInfo();

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
function checkLength(str){
    return new Promise(
        (resolve)=>{
            //length is greater than 10
            if(str.length>10)
                console.log("Big word");
            //length is less than 10
            else if(str.length < 10)
                console.log("Small Number");
            //Does nothing if length equal to 10?
            resolve();
        }
    )
}

//Tests
//Greater than 10 - should log "Big word"
checkLength("Abracadabra")
    .then(  ()=>{console.log("1st Promise Resolved.")} );

//Equal to 10 - shouldn't log anything
checkLength("hello well")
    .then(  ()=>{console.log("2nd Promise Resolved.")} );

//Less than 10 - Should log "Small Number"
checkLength("aeiou")
    .then( ()=>{console.log("3rd Promise Resolved.")} );