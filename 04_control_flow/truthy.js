// const userEmail = 'abc@mail.com';

// if (userEmail) {
//     console.log('has user email');
// } else {
//     console.log(`don't have user email`);
// }

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', ' ', [], {}, function(){}

// const userEmail = [];
// how to check array
// if (userEmail.length == 0) {
//     console.log('empty array');
// }

// const obj = {};

// if (Object.keys(obj).length == 0) {
//     console.log('empty object');
// }

// Nullish coalesence operators (??): null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;

// it will return the first matching value
// val1 = undefined ?? 10 ?? 20;

// console.log(val1);

// ternary opertaor
// condition ? true : false

const price = 100;
price < 80 ? console.log('less than 80') : console.log('greater than 80');