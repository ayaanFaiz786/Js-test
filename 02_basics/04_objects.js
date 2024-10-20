// define object
// this is singleton onject
const user = new Object();

// non singelton
const tinderUser = {};
tinderUser.id = 'abc123';
tinderUser.name = 'sam';
tinderUser.isLoggedIn  = false;

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

// console.log(tinderUser);

const regularName = {
    email: 'someuser@mail.com',
    fullName: {
        userfullName: {
            firstaName: 'faizan',
            lastName: 'Khan',
        }
    }
}

// console.log(regularName.fullName.userfullName.firstaName);

// merge objects
const obj1 = {1:'a', 2:'b'};
const obj2 = {3:'c', 4:'d'};

// const obj3 = Object.assign({}, obj1, obj2);
// using spread operators
const obj3 = {...obj1, ...obj2};
// console.log(obj3);
