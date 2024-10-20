// array functions

let myArray = [1,2,3,4,5];

myArray.push(6);
// console.log(myArray);
// myArray.pop();
// myArray.unshift(9); addselement at start of array
// myArray.shift(); removes element from start of array
// console.log(myArray.includes(6));
// console.log(myArray.indexOf(1));

// convert array elements to string
// let newArray = myArray.join();
// console.log(newArray); 
// console.log(myArray);


// slice, splice
console.log('A', myArray);
// this will get the elements from 1 to 2 
let myn1 = myArray.slice(1,3);
console.log(myn1);
console.log("B", myArray)
// this will get elements from 1 to 3 but will also manipulate the orignal array.
let myn2 = myArray.splice(1,3);
console.log(myn2);
console.log('C', myArray);
