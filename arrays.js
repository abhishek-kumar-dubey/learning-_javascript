// concatanate ararys
const frontend = ["HTML","Javascript","CSS"];
const backend = ["Java","Python"];
const fullstack = frontend.concat(backend);
// console.log(fullstack);

// Recognizing a javascript array
// console.log(Array.isArray(fullstack));
// console.log(fullstack instanceof Array);

// Largest element in an array in javascript

const arr = [1,2,3,4,5,6,59,13,18,37];
// let max = arr.max;
// console.log(max);

function maxArray(array){
    let len = array.length;
    let max = array[0];
    for (i=1;i<len;i++){
        if (max<=array[i])
        {
            max=array[i]
        }
    }
    return max;
}

// console.log(maxArray(arr));

// find the second largest element in a array
function secondLargest(array){
    const sorted_array = [...array].sort((a,b)=> a-b );
    console.log(sorted_array);
// console.log(sorted_array);
// console.log(arr);

    let l = sorted_array.length;
    let arr_2nd = sorted_array[l-2];
    let largest = sorted_array[l-1];

    for (let i=l-2;i>=0;i--)
    {
        
        if (sorted_array[i]<largest){
            return sorted_array[i];
        }
        
    }
    return undefined;
  

    }

arr1 = [1,2,3,3,3,3,3,37,37,37,6,6,6]

console.log(secondLargest(arr1));


// spread operator

const a= [2,5,7,12];
const b = [...a, 30, 50,60];

console.log(b);

console.log(a);

const c = [1,2,3,-1];
// console.log(Math.min(c));
const min_num = Math.min(...c);
console.log(min_num);

// splice in Javascript array

const fruits = ["Apple", "Mango","Banana", "Grapes"];
console.log(fruits);
fruits.splice(1,3,"Guava","Pineapple","Orange");
console.log(fruits);

// spread 

function sumNumbers(x, y, z){
    return x+y+z;
}

// Array deconstruction

const numbers = [1,2,3,4];

const [first, second, third] = numbers;

console.log(first, second, third);

const [x,, ] = numbers;
console.log(first, third);


const num = [0,1,2,3,4,5,6,7,8,9];

const[p,q, ...rest] = num;
console.log(p,q);
console.log(rest)
