// Higher order function - function that accepts a function as a parameter and/ or return a function

function withLogging(fn){
    function wrapper(...args){
        const result = fn(...args);
        return result;
    }
    return wrapper;
}

function printDetails(name, country){
   const result= "Welcome onboard "+ name + " to "+ country;
   return result;
}

const greetings = withLogging(printDetails);
// console.log(greetings.name);

// console.log(greetings("Abhishek","USA")); 

// Usecase
// square of any array of numbers
function squareNumber(arr){
    squaredNumbers = [];
    for(let num of arr){
        squaredNumbers.push(num**2);
    }
    return squaredNumbers;
}

// square of any array of numbers
function cubeNumber(arr){
    cubedNumbers = [];
    for(let num of arr){
        cubedNumbers.push(num**3);
    }
    return cubedNumbers;
}

const arr = [1,2,3,4,5];

output = squareNumber(arr);
// console.log(output);

cubedOutput = cubeNumber(arr);
// console.log(cubedOutput);


// higher order function
function powersOfNumbers(arr){
    return function(n){
        const nthPoweredNumbers = [];
        for(let num of arr){
            nthPoweredNumbers.push(num**n);
        }
        return nthPoweredNumbers;
    }
}

powerOutput = powersOfNumbers(arr);
// console.log(powerOutput(2));
// console.log(powerOutput(3));
// console.log(powerOutput(4));
// console.log(powerOutput(5));


// another implementation of higher order function

function numberPower(wrapper, arr){
    let numberPowered = [];
    for (let num of arr){
        numberPowered.push(wrapper(num));
    }
    return numberPowered;
}

function square(n){
    return n**2;
}

function cube(n){
    return n**3;
}
function powerFour(n){
    return n**4;
}

let outputs = numberPower(powerFour,arr);
console.log(outputs);