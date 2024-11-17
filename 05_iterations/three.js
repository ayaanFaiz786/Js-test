// for of

const arr = [1,2,3,5];
for (const val of arr) {
    // console.log(val);
}

const greetings = "Hello World!";
for (const greet of greetings) {
    // console.log(`Each character is ${greet}`);
}

// Map : its a kind of object that store key pair value, It has only unique value
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('FR', 'France');

// console.log(map);
//  it will print array of data eg - [ 'IN', 'India' ]
for (const key of map) {
    // console.log(key);
}

// destructuring - it will print key and val seperate
for (const [key, val] of map) {
    // console.log(key, ":-", val);
}

const myObject = {
    game1: 'test',
    game2: 'best',
}

// it will give error. Can't itterate object life this
// for (const val of myObject) {
//     console.log(val);
// }
