// pure function
// contains parameters
// should return something
// for the same input you should get same output
// is not dependent on external variables/functions, etc.
// parameter(s) is not mutated 

// this is an example of a pure function
function addDoubleValue(num){
    return num*2;
}

console.log(addDoubleValue(7));

function secureRandInt(min, max){
    min = Math.ceil(min);
    console.log(min);
    max = Math.floor(max);
    console.log(max)
    return Math.floor(Math.random()*(max-min+1)+min);
}

console.log(secureRandInt(0,7));

// impure function - here an exteranl varaiable "x" impacts the return value
const max = 100;
const x = Math.floor(Math.random()*(max-1))
function addDoubleValues(num){
    return num*2*x;
}

// impure function - parameter is getting mutated

function appendNumbersInArray(arr)
{   arr.push(7,8);
    return arr;
}

const arr = [1,3,4,4,6,5];

// const result = appendNumbersInArray(arr);

// console.log(result);

// pure function - handling parameters without mutating them

function appendNumbers(arr){
    const newArr = [];
    newArr.push(...arr,7,8);
    return newArr;
}

const result = appendNumbers(arr);

console.log(result);
console.log(arr);


