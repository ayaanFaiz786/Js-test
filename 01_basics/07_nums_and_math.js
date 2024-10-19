const score = 100;

// console.log(score);

const balance = new Number(100);
// console.log(balance);

// functions 
// console.log(balance.toString().length);

// decimal after dot
// console.log(balance.toFixed(2));

const hundreds = 10000000;
// it will add thousand seperator comma (,) eg -1,00,00,000
// console.log(hundreds.toLocaleString('en-IN'));
// comma seperator as per american standards eg -10,000,000 
// console.log(hundreds.toLocaleString());

// --------------------- Maths --------------------------------
// console.log(Math);
// converts negative to positive
// console.log(Math.abs(-4));
// Math.floor() and Math.ceil()
// console.log(Math.round(4.5));

// random() return number between 0 - 1 by default
// console.log(Math.random());
// to get random number between 1 to 10
// console.log((Math.random()*10)+1);

let min = 10;
let max = 20;
const randoNum = (Math.random() * (max - min + 1)) + min;
console.log(Math.floor(randoNum));

//A simple explanation that I always think about is "Math.random() 
//sirf 0 se 1 tk random number generate krta hai 0 is inclusive, 1 is exclusive....
//So in this statement Math.random() * 10, the result can never be equal 
//to 10 qki 10 lane k lie usko 1 se mulitply hona pdega jo ki possible nahi hai, 
//to result hmesha 10 se niche hoga (it could be 9.999999) but 10 nhi hoga, or 
//iske upr se agar aap Math.floor(Math.random() * 10) krte ho to result 0 se 9 tk koi 
//bhi integer ho skta hai but 10 nahi, to 10 ko bhi range me include krne k lie hum usme 1 
//add kr dete hai.....that is if you do Math.floor(Math.random() * 11) to result [0,10] 
//tk aaega both inclusive.....and at last isme bas aap 1 add kr doge to result [1,11] m 
//convert ho jaega

