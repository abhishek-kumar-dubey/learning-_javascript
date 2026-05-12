// named functions

function greet(name){
    console.log("Your Name is: "+ name);
}

// function with return type

function square(number){
    return number**2;
}

greet("Abhishek");

let num = 7
console.log("Square of "+num+ " is "+ square(num));

// Anonymous function
const introduce = function(name){
    return "I am "+ name;
}

console.log(introduce("Abhishek"))

// callback functions

function multiple(a)
{
    return a**2;
}

function addMultiple(a,b, multiple){
    return multiple(a) + multiple(b);
}

let a = 7;
let b = 3;

console.log(addMultiple(7,3, multiple));

// constructor function

function Person(name, age)
{
    this.name = name;
    this.age = age;
}

const p1 = new Person("Abhishek", 42);
console.log(p1.name);

class User{
    constructor(name, age, occupation){
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }
    printAllDetails() {

        console.log(this.name);
        console.log(this.age);
        console.log(this.occupation);
        
    }
}

user = new User("Abhishek", 42, "Product Manager");
user.printAllDetails();