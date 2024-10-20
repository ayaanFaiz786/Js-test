// Singelton
// Object.create();

let mySym = Symbol('key1');
// object literals
const jsUser = {
    name: 'faizan',
    "lastName": 'khan',
    [mySym]: 'myKey1',
    age: 20,
    email: 'faizan@mail.com',
    isLoggedIn: false,
    loggedInDays: ['mon', 'tue']
};

// ways to access data from object
// console.log(jsUser.name);
// console.log(jsUser['name']);
// can access symbol like this
// console.log(jsUser[mySym]);

// jsUser.email = 'faizan@google.com'
// console.log(jsUser);
// freeze will not allow further modification to object
// Object.freeze(jsUser);
// jsUser.email = 'faizan@chatgpt.com';
// console.log(jsUser);

jsUser.greetings = function() {
    console.log('hello js user');
}

jsUser.greetingUser = function() {
    console.log(`hello js user ${this.name}`);
}
console.log(jsUser.greetings());
console.log(jsUser.greetingUser());
