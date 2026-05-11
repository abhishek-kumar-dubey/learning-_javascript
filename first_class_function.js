// First class function has three properties
// 1. a function can be assigned to a variable
// 2. a function can be passed on as a parameter
//  3. a function can retrun another functions


const greet = function(){ console.log("Welcome to the jungle")};
// console.log(greet);
// greet();



function wrapper(){
    return " Welcome to Javsscript";
}
function greetMessage(inner, name){
    return name + inner();
}


// console.log(greetMessage(wrapper, "Abhishek"));

// function returning another function

function multiplyByaRandomNumber(num){
    function wrapper(max){
        const rand_int = Math.floor(Math.random()*(max-1));
        return num*rand_int;
    }
    return wrapper;
}

const multi = multiplyByaRandomNumber(7);
const random_product = multi(10);
// console.log(random_product);

for (let c=0;c<10;c++){
    console.log("Welcome "+ c + " to the jungle");
}