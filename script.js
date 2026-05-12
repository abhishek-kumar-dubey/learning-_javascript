console.log("Hello World");
// document.getElementById("msg").innerText = "Hello World!";   
if (true) {
    let a = 10;
    let b = 20;

    console.log(a + b);
}
// console.log(a); // This will throw an error because 'a' is not defined outside the block scope. 

// const PI = 3.14;
// const PI = 3.14159; // This will throw an error because 'PI' is a constant and cannot be reassigned.    

const ob = {"name": "John", "age": 30};
console.log(ob.name); // Output: John
ob.name = "Jane"; // This is allowed because we are not reassigning the constant, but modifying the object it references. 
console.log(ob.name); // Output: Jane
