const isUserLoggedIn = true;

// if (isUserLoggedIn) {
//     console.log('use is logged in');
// } else {
//     console.log('user not logged in')
// }

// <,>,<=,>=,==,!=, ===, !==

// const score = 200;
// if (score == 100) {
//     let power = 'fly';
//     console.log(`Power is ${power}`);
// }
// power is not accessible here its inside if scope
// console.log(`Power is ${power}`);

// shorthand

// const balance = 1000;
// if (balance > 500) console.log('yes')

const userLoggedIn = true;
const debitCard = true;

if(userLoggedIn && debitCard) {
    console.log('You can buy');
}