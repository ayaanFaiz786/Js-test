const user = {
    name : 'test user',
    age : 38,
    welcomeMessage: function() {
        console.log(`${this.name} welcome`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.name = 'sam';
// user.welcomeMessage();

// in node this refer to empty object
// console.log(this);

// function test()
// {
//     const name = 'faizan';

//     // here this.name is undefined
//     console.log(this.name);
// }
// test();

// const  test = function test()
// {
//     const name = 'faizan';

//     // here this.name is undefined
//     console.log(this.name);
// }
// test();

// arrow function 
// const test = () => {
//     const name = 'faizan';
//     console.log(this);
// }

// test();

// explicit return
// const addTwoNumber = (num1, num2) => {
//     return num1+num2;
// }

// implecit return for single line code no need of return keyword
// const addTwoNumber = (num1, num2) => num1+num2;

// const addTwoNumber = (num1, num2) => (num1+num2);

// console.log(addTwoNumber(2, 4));

const returnObject = () => ({name:'faizan', age:28})
console.log(returnObject());