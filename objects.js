let obj = {"name":"Nexon", "make":"Tata","power":"2100 kW"};
console.log(obj);
obj.price = "INR 1500000";
// console.log(obj);
// console.log(obj.hasOwnProperty("power"));

let map = new Map(Object.entries(obj));

// console.log(map);

// console.log(Object.keys(obj));

//  creating a function named func1
function func1()
{

}

function func2(a,b){
}
console.log(func1.name);
console.log(func2.name);


// Objects of functions

let objx = {function1: function functionName1(){},
           function2: ()=>{console.log("function2 is running")},
        function3: ()=>{objx.function2();

        }
    }
// objx.function3();

//  object shorthand

const fname = "Abhishek";
const lname = "Dubey";
const age = 42;
const country = "India";
const city = "Lucknow";

const user = {fname, lname, age, country, city};

// console.log(typeof(user));
// console.log(user);

// for in for javascript object

let car = new Object();
car.name = "Innova";
car.make = "Toyota";
car.power = "2100 HP";
car.price = "INR 4000000";

console.log(car);

for (let key in car){
    console.log(`${key}: ${car[key]}`);
}

// shallow and deep copy

let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
};

let newEmployee = {...employee};

// console.log(newEmployee);
// console.log(employee);

newEmployee.ename = "Jill";
// console.log(newEmployee);

// Deep copy

let newEmp = JSON.parse(JSON.stringify(employee));
console.log(newEmp);
console.log(Object.keys(newEmployee));

// functions as objects

function greet(){
    console.log("Hello programming");
}

console.log(typeof(greet));
console.log(greet.name);
