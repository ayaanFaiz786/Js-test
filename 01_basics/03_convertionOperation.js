// conversion and operation

let score = "33";

// console.log(typeof score);
// console.log(typeof(score));

let scoreInNumber = Number(score);
// console.log(typeof scoreInNumber);

// covertion possiblity
// "33" => 33
// "33abc" => NaN
// true =>  1, fasle => 0 

let isLoggedIn = "1";
let booleanLoggedIn = Boolean(isLoggedIn);
console.log(booleanLoggedIn);

//  1 => true, 0 = false;
// "" => false, "test" => true

let num = 22;
let stringNum = String(num);

// Operations
// + - addition, - => sub, * =>  multiplication, 2**3 =>  2 riase to power of 3

// incremental peration 
let x = 3;
// it will assign and than increment
const y = x++;

// console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
// it will increment and than assign
const b = ++a;

// console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
