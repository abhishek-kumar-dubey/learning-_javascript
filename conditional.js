let x = 5;
let y = '5';

// Checking for thr operands
console.log(typeof(x + y));
console.log(x * y);
console.log(x!=y);
console.log(x==y);
console.log(x===y);
console.log(NaN === NaN); // This will return false because NaN is not equal to itself.
console.log(isNaN(NaN)); // This will return true because NaN is not a number.                  
console.log(NaN==NaN); // This will return false because NaN is not equal to itself.

let z= -10;
if (z > 0) {
    console.log("z is positive");
} else if (z < 0) {
    console.log("z is negative");
} else {
    console.log("z is zero");
}

let age = 25;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

const marks = 85;

let Branch;

switch (true) {
    case marks>=90:
        Branch = "Computer Science and Engineering";
        break;
    case marks>=80:
        Branch = "Mechanical Engineering";
        break;
    case marks>=70:
        Branch = "Electrical Engineering";
        break;
    case marks<50:
        Branch = "Civil Engineering";
        break;
}
    console.log(Branch);

// Ternay operations
let marks_scored=50;
const pmarks =39;
let result = (marks>pmarks) ? "Pass":"Fail";
console.log(result);

//  ternary operations with function calls
function sayHello(name){
    console.log(`Hello, ${name}!`);
}

function sayGoodbye(name){
    console.log(`Goodbye, ${name}!`);
}

let isLeaving = true;

let name = "Abhishek";

isLeaving ? sayGoodbye(name):sayHello(name);

// logical operands
let userAge = 25;
let isIdProof = true;

if (userAge>18 && isIdProof){
    console.log("allowed")}
else{
    console.log("not allowed")
}

